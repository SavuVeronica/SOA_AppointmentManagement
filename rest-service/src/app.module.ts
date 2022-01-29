import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from './appointments/appointments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AppointmentsModule, MongooseModule.forRoot('mongodb+srv://user:user@clusterappointment.g5p60.mongodb.net/appointment\n'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
