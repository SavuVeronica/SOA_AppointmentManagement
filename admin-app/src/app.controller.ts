import { Controller, Get, HttpService } from "@nestjs/common";
import { AppService } from './app.service';
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private httpService: HttpService) {}

  @Get()
  getHello() : any {
    this.httpService.get('http://localhost:4000/appointments').subscribe((res)=>{
      console.log(res);
      return res;
    });
  }

  // @EventPattern('appoint_created')
  // handleAppointmentCreated(appointment: Appointment) {
  //   this.reminderService.create({title: appointment.description, date: appointment.date, hour: appointment.hour})
  //   console.log(appointment);
  // }

  // @EventPattern('appoint_updated')
  // handleAppointmentUpdated(appointment: Appointment){
  //   this.reminderService.update_from_appointment(appointment.id,appointment.date, appointment.hour);
  //   console.log(appointment);
  // }

  // @EventPattern('appoint_deleted')
  // handleAppointmentDeleted(appointment: Appointment){
  //   this.reminderService.delete(appointment.id);
  //   console.log(appointment);
  // }
}
