import { HttpModule, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReminderModule } from './reminder/reminder.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authorization/auth.module';

@Module({
  imports: [ HttpModule, ReminderModule, MongooseModule.forRoot('mongodb+srv://user:user@clusterappointment.g5p60.mongodb.net/reminder\n',{
    autoCreate: true
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
