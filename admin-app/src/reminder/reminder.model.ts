import * as mongoose from 'mongoose';

export const RemindersSchema = new mongoose.Schema({
  title: String,
  date: {type:String, required: true},
  hour: {type:String, required: true}
});