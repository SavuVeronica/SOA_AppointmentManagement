import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Res,
  HttpStatus,
  NotFoundException, Inject,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentDto } from './dtos/appointment.dto';
import { Appointment } from './interfaces/appointments.interface';
import { AuthGuard } from '@nestjs/passport';
import { ClientProxy } from '@nestjs/microservices';

@Controller('appointments')
export class AppointmentsController {

  constructor(private readonly appointmentsService: AppointmentsService,
              @Inject('APPOINTMENTS_SERVICE') private readonly client: ClientProxy) {
  }

  @Get()
  findAll() : Promise<Appointment[]> {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) : Promise<Appointment> {
    return this.appointmentsService.find(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() appointment: AppointmentDto) {
    const newAppointment = await this.appointmentsService.create(appointment);
    this.client.emit('appoint_created', newAppointment);
    return newAppointment;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id,@Body() appointment: AppointmentDto)  {
    const oldAppointment = await this.appointmentsService.find(id);
    const updatedAppointment = await this.appointmentsService.update(id, appointment);
    this.client.emit('appoint_updated', [oldAppointment, updatedAppointment]);
    return updatedAppointment;
  }

  // Checks if the access token is valid before making the request
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id) {
    const deletedAppointment = await this.appointmentsService.delete(id);
    this.client.emit('appoint_deleted', deletedAppointment);
    return deletedAppointment;
  }
}
