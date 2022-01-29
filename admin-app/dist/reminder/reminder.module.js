"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderModule = void 0;
const common_1 = require("@nestjs/common");
const reminder_controller_1 = require("./reminder.controller");
const reminder_service_1 = require("./reminder.service");
const mongoose_1 = require("@nestjs/mongoose");
const reminder_model_1 = require("./reminder.model");
const authentication_middleware_1 = require("../common/authentication.middleware");
const app_gateway_1 = require("../app.gateway");
let ReminderModule = class ReminderModule {
    configure(consumer) {
        consumer.apply(authentication_middleware_1.AuthenticationMiddleware).forRoutes({ method: common_1.RequestMethod.POST, path: '/appointments' }, { method: common_1.RequestMethod.PUT, path: '/appointments' }, { method: common_1.RequestMethod.DELETE, path: '/appointments' });
    }
};
ReminderModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Reminder", schema: reminder_model_1.RemindersSchema }]), common_1.HttpModule],
        controllers: [reminder_controller_1.ReminderController],
        providers: [reminder_service_1.ReminderService, app_gateway_1.AppGateway]
    })
], ReminderModule);
exports.ReminderModule = ReminderModule;
//# sourceMappingURL=reminder.module.js.map