import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class AppointmentsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void;
}
