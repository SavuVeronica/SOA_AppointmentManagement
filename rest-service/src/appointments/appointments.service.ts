import { Injectable } from '@nestjs/common';
import { Appointment } from './interfaces/appointments.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppointmentsService {

  constructor(@InjectModel('Appointment') private readonly appointmentModel: Model<Appointment>) {}

  async findAll() : Promise<Appointment[]> {
    return await this.appointmentModel.find().exec();
  }

  async find(id: string) : Promise<Appointment>{
    return await this.appointmentModel.findById(id).exec();
  }

  async create(appointment: Appointment) : Promise<Appointment> {
    const newAppointment = await new this.appointmentModel(appointment);
    return newAppointment.save();
  }

  async update(id: string, appointment: Appointment) : Promise<Appointment> {
    return await this.appointmentModel.findByIdAndUpdate(id, appointment, {new: true}).exec();
  }

  async delete(id: string) : Promise<Appointment> {
    return await this.appointmentModel.findByIdAndRemove(id).exec();
  }

}
