import {
  Body,
  Controller,
  Delete,
  Get,
  HttpService,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { ReminderDto } from './dtos/reminder.dto';
import { Appointment } from './interfaces/appointment.interface';
import { Reminder } from './interfaces/reminder.interface';
import { ReminderService } from './reminder.service';

@Controller('reminders')
export class ReminderController {
  constructor(
    private readonly reminderService: ReminderService,
    private httpService: HttpService,
  ) {}

  @Get()
  async findAll(): Promise<Reminder[]> {
    return this.reminderService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id): Promise<Reminder> {
    return this.reminderService.find(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() reminder: Reminder): Promise<void> {
    this.reminderService.create(reminder);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id, @Body() reminder: ReminderDto): Promise<Reminder> {
    const updatedAppointment = this.reminderService.update(id, reminder);
    return updatedAppointment;
  }

  // Checks if the access token is valid before making the request
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id): Promise<Reminder> {
    const deletedAppointment = this.reminderService.delete(id);
    return deletedAppointment;
  }

  @Get('/subscribe')
  subscribe(): any {
    this.httpService
      .get('http://localhost:4000/appointments')
      .subscribe((res) => {
        console.log(res);
        return res;
      });
  }

  @EventPattern('appoint_created')
  handleAppointmentCreated(appointment: Appointment) {
    let newReminder = this.reminderService.create({
      title: appointment.description,
      date: appointment.date,
      hour: appointment.hour,
    });
    console.log(newReminder);
  }

  @EventPattern('appoint_updated')
  async handleAppointmentUpdated([oldAppointment, updatedAppointment]: [
    Appointment,
    Appointment,
  ]) {
    // need to find appointment by date and hour and then update it
    let oldReminder = await this.reminderService.find_by_date_hour(
      oldAppointment.date,
      oldAppointment.hour,
    );
    let updatedReminder = this.reminderService.update_from_appointment(
      oldReminder.id,
      updatedAppointment.date,
      updatedAppointment.hour,
    );
    console.log(updatedReminder);
  }

  @EventPattern('appoint_deleted')
  handleAppointmentDeleted(appointment: Appointment) {
    // need to find appointment by date and hour and then delete it, not by id
    let deletedReminder = this.reminderService.delete_from_appointment(
      appointment.date,
      appointment.hour,
    );
    console.log(deletedReminder);
  }
}
