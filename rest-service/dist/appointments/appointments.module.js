"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const appointments_controller_1 = require("./appointments.controller");
const appointments_service_1 = require("./appointments.service");
const appointments_schema_1 = require("./schemas/appointments.schema");
const authentication_middleware_1 = require("../common/authentication.middleware");
const microservices_1 = require("@nestjs/microservices");
let AppointmentsModule = class AppointmentsModule {
    configure(consumer) {
        consumer.apply(authentication_middleware_1.AuthenticationMiddleware).forRoutes({ method: common_1.RequestMethod.POST, path: '/appointments' }, { method: common_1.RequestMethod.PUT, path: '/appointments' }, { method: common_1.RequestMethod.DELETE, path: '/appointments' });
    }
};
AppointmentsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Appointment", schema: appointments_schema_1.AppointmentsSchema }]),
            microservices_1.ClientsModule.register([
                {
                    name: 'APPOINTMENTS_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqps://djoyghlz:IehzmtZnAfd-rRZwKsE2fRaPTYalXkg1@roedeer.rmq.cloudamqp.com/djoyghlz'],
                        queue: 'cats_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ])],
        controllers: [appointments_controller_1.AppointmentsController],
        providers: [appointments_service_1.AppointmentsService],
    })
], AppointmentsModule);
exports.AppointmentsModule = AppointmentsModule;
//# sourceMappingURL=appointments.module.js.map