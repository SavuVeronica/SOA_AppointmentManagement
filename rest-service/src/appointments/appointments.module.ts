import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { AppointmentsSchema } from './schemas/appointments.schema';
import { AuthenticationMiddleware } from '../common/authentication.middleware';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ MongooseModule.forFeature([{name: "Appointment", schema: AppointmentsSchema}]),
    // we send the events from this microservice to the main one, connected to the application
    ClientsModule.register([
        {
          name: 'APPOINTMENTS_SERVICE',
          transport: Transport.RMQ,
          options: {
            urls: ['amqps://djoyghlz:IehzmtZnAfd-rRZwKsE2fRaPTYalXkg1@roedeer.rmq.cloudamqp.com/djoyghlz'],
            queue: 'cats_queue',
            queueOptions: {
              durable: false
            },
          },
        },])],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule
  implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      {method: RequestMethod.POST, path: '/appointments'},
      {method: RequestMethod.PUT, path: '/appointments'},
      {method: RequestMethod.DELETE, path: '/appointments'}
    )
  }
}
