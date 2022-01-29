import { AppointmentsService } from './appointments.service';
import { AppointmentDto } from './dtos/appointment.dto';
import { Appointment } from './interfaces/appointments.interface';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppointmentsController {
    private readonly appointmentsService;
    private readonly client;
    constructor(appointmentsService: AppointmentsService, client: ClientProxy);
    findAll(): Promise<Appointment[]>;
    findOne(id: any): Promise<Appointment>;
    create(appointment: AppointmentDto): Promise<Appointment>;
    update(id: any, appointment: AppointmentDto): Promise<Appointment>;
    delete(id: any): Promise<Appointment>;
}
