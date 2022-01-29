import { HttpService } from '@nestjs/common';
import { ReminderDto } from './dtos/reminder.dto';
import { Appointment } from './interfaces/appointment.interface';
import { Reminder } from './interfaces/reminder.interface';
import { ReminderService } from './reminder.service';
export declare class ReminderController {
    private readonly reminderService;
    private httpService;
    constructor(reminderService: ReminderService, httpService: HttpService);
    findAll(): Promise<Reminder[]>;
    find(id: any): Promise<Reminder>;
    create(reminder: Reminder): Promise<void>;
    update(id: any, reminder: ReminderDto): Promise<Reminder>;
    delete(id: any): Promise<Reminder>;
    subscribe(): any;
    handleAppointmentCreated(appointment: Appointment): void;
    handleAppointmentUpdated([oldAppointment, updatedAppointment]: [
        Appointment,
        Appointment
    ]): Promise<void>;
    handleAppointmentDeleted(appointment: Appointment): void;
}
