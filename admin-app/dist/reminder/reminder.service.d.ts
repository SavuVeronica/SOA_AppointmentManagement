import { Model } from 'mongoose';
import { Reminder } from './interfaces/reminder.interface';
export declare class ReminderService {
    private readonly reminderModel;
    constructor(reminderModel: Model<Reminder>);
    findAll(): Promise<Reminder[]>;
    find(id: string): Promise<Reminder>;
    create(Reminder: Reminder): Promise<Reminder>;
    update(id: string, reminder: Reminder): Promise<Reminder>;
    delete(id: string): Promise<Reminder>;
    update_from_appointment(id: string, date: string, hour: string): Promise<import("mongoose").Document<unknown, any, Reminder> & Reminder & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    find_by_date_hour(date: string, hour: string): Promise<import("mongoose").Document<unknown, any, Reminder> & Reminder & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete_from_appointment(date: string, hour: string): Promise<import("mongoose").Document<unknown, any, Reminder> & Reminder & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
