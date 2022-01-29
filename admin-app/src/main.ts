import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:8085", "http://localhost:8084"]
  });


  await app.listen(4001);
}
bootstrap();
