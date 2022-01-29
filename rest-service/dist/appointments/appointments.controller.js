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
exports.AppointmentsController = void 0;
const common_1 = require("@nestjs/common");
const appointments_service_1 = require("./appointments.service");
const appointment_dto_1 = require("./dtos/appointment.dto");
const passport_1 = require("@nestjs/passport");
const microservices_1 = require("@nestjs/microservices");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentsService, client) {
        this.appointmentsService = appointmentsService;
        this.client = client;
    }
    findAll() {
        return this.appointmentsService.findAll();
    }
    findOne(id) {
        return this.appointmentsService.find(id);
    }
    async create(appointment) {
        const newAppointment = await this.appointmentsService.create(appointment);
        this.client.emit('appoint_created', newAppointment);
        return newAppointment;
    }
    async update(id, appointment) {
        const oldAppointment = await this.appointmentsService.find(id);
        const updatedAppointment = await this.appointmentsService.update(id, appointment);
        this.client.emit('appoint_updated', [oldAppointment, updatedAppointment]);
        return updatedAppointment;
    }
    async delete(id) {
        const deletedAppointment = await this.appointmentsService.delete(id);
        this.client.emit('appoint_deleted', deletedAppointment);
        return deletedAppointment;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "findOne", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "create", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, appointment_dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "update", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "delete", null);
AppointmentsController = __decorate([
    common_1.Controller('appointments'),
    __param(1, common_1.Inject('APPOINTMENTS_SERVICE')),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService,
        microservices_1.ClientProxy])
], AppointmentsController);
exports.AppointmentsController = AppointmentsController;
//# sourceMappingURL=appointments.controller.js.map