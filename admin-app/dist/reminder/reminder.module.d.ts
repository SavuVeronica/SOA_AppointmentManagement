import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class ReminderModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void;
}
