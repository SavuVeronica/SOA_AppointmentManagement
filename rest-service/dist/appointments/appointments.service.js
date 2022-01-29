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
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }
    async findAll() {
        return await this.appointmentModel.find().exec();
    }
    async find(id) {
        return await this.appointmentModel.findById(id).exec();
    }
    async create(appointment) {
        const newAppointment = await new this.appointmentModel(appointment);
        return newAppointment.save();
    }
    async update(id, appointment) {
        return await this.appointmentModel.findByIdAndUpdate(id, appointment, { new: true }).exec();
    }
    async delete(id) {
        return await this.appointmentModel.findByIdAndRemove(id).exec();
    }
};
AppointmentsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Appointment')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointments.service.js.map