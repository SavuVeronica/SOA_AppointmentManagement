import * as mongoose from 'mongoose';

export const AppointmentsSchema = new mongoose.Schema({
  description: String,
  date: {type:String, required: true},
  hour: {type:String, required: true}
});