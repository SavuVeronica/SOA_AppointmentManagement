import { HttpModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RemindersSchema } from './reminder.model';
import { AuthenticationMiddleware } from '../common/authentication.middleware';
import { AppGateway } from 'src/app.gateway';

@Module({
  imports: [MongooseModule.forFeature([{name: "Reminder", schema: RemindersSchema}]), HttpModule],
  controllers: [ReminderController],
  providers: [ReminderService, AppGateway]
})
export class ReminderModule
  implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      {method: RequestMethod.POST, path: '/appointments'},
      {method: RequestMethod.PUT, path: '/appointments'},
      {method: RequestMethod.DELETE, path: '/appointments'}
    )
  }
}
