"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const passport_1 = require("@nestjs/passport");
const reminder_dto_1 = require("./dtos/reminder.dto");
const reminder_service_1 = require("./reminder.service");
let ReminderController = class ReminderController {
    constructor(reminderService, httpService) {
        this.reminderService = reminderService;
        this.httpService = httpService;
    }
    async findAll() {
        return this.reminderService.findAll();
    }
    async find(id) {
        return this.reminderService.find(id);
    }
    async create(reminder) {
        this.reminderService.create(reminder);
    }
    update(id, reminder) {
        const updatedAppointment = this.reminderService.update(id, reminder);
        return updatedAppointment;
    }
    delete(id) {
        const deletedAppointment = this.reminderService.delete(id);
        return deletedAppointment;
    }
    subscribe() {
        this.httpService
            .get('http://localhost:4000/appointments')
            .subscribe((res) => {
            console.log(res);
            return res;
        });
    }
    handleAppointmentCreated(appointment) {
        let newReminder = this.reminderService.create({
            title: appointment.description,
            date: appointment.date,
            hour: appointment.hour,
        });
        console.log(newReminder);
    }
    async handleAppointmentUpdated([oldAppointment, updatedAppointment]) {
        let oldReminder = await this.reminderService.find_by_date_hour(oldAppointment.date, oldAppointment.hour);
        let updatedReminder = this.reminderService.update_from_appointment(oldReminder.id, updatedAppointment.date, updatedAppointment.hour);
        console.log(updatedReminder);
    }
    handleAppointmentDeleted(appointment) {
        let deletedReminder = this.reminderService.delete_from_appointment(appointment.date, appointment.hour);
        console.log(deletedReminder);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "find", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, reminder_dto_1.ReminderDto]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/subscribe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ReminderController.prototype, "subscribe", null);
__decorate([
    (0, microservices_1.EventPattern)('appoint_created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "handleAppointmentCreated", null);
__decorate([
    (0, microservices_1.EventPattern)('appoint_updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "handleAppointmentUpdated", null);
__decorate([
    (0, microservices_1.EventPattern)('appoint_deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReminderController.prototype, "handleAppointmentDeleted", null);
ReminderController = __decorate([
    (0, common_1.Controller)('reminders'),
    __metadata("design:paramtypes", [reminder_service_1.ReminderService,
        common_1.HttpService])
], ReminderController);
exports.ReminderController = ReminderController;
//# sourceMappingURL=reminder.controller.js.map