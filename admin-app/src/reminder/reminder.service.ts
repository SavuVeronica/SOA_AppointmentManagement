import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Reminder } from './interfaces/reminder.interface';

@Injectable()
export class ReminderService {
    constructor(@InjectModel('Reminder') private readonly reminderModel: Model<Reminder>) {}

    async findAll() : Promise<Reminder[]> {
      return await this.reminderModel.find().exec();
    }
  
    async find(id: string) : Promise<Reminder>{
      return await this.reminderModel.findById(id).exec();
    }
  
    async create(Reminder: Reminder) : Promise<Reminder> {
      const newReminder = await new this.reminderModel(Reminder);
      return newReminder.save();
    }
  
    async update(id: string, reminder: Reminder) : Promise<Reminder> {
      return await this.reminderModel.findByIdAndUpdate(id, reminder, {new: true}).exec();
    }
  
    async delete(id: string) : Promise<Reminder> {
      return await this.reminderModel.findByIdAndRemove(id).exec();
    }

    async update_from_appointment(id:string, date: string, hour: string)
    {
      return await this.reminderModel.findByIdAndUpdate(id, {date: date, hour: hour}, {new:true}).exec();
    }

    async find_by_date_hour(date:string, hour:string) {
      return await this.reminderModel.findOne({'date':date,'hour':hour});
    }

    async delete_from_appointment(date: string, hour:string)
    {
      return await this.reminderModel.findOneAndRemove({'date': date, 'hour': hour});
    }
  
}
