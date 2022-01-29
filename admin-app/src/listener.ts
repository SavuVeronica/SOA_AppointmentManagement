import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://djoyghlz:IehzmtZnAfd-rRZwKsE2fRaPTYalXkg1@roedeer.rmq.cloudamqp.com/djoyghlz'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen().then((() => {
      console.log("Microservice is listening")}
  ));
}
bootstrap();
