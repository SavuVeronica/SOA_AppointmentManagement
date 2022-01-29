import { Appointment } from './interfaces/appointments.interface';
import { Model } from 'mongoose';
export declare class AppointmentsService {
    private readonly appointmentModel;
    constructor(appointmentModel: Model<Appointment>);
    findAll(): Promise<Appointment[]>;
    find(id: string): Promise<Appointment>;
    create(appointment: Appointment): Promise<Appointment>;
    update(id: string, appointment: Appointment): Promise<Appointment>;
    delete(id: string): Promise<Appointment>;
}
