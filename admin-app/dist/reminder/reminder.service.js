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
exports.ReminderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ReminderService = class ReminderService {
    constructor(reminderModel) {
        this.reminderModel = reminderModel;
    }
    async findAll() {
        return await this.reminderModel.find().exec();
    }
    async find(id) {
        return await this.reminderModel.findById(id).exec();
    }
    async create(Reminder) {
        const newReminder = await new this.reminderModel(Reminder);
        return newReminder.save();
    }
    async update(id, reminder) {
        return await this.reminderModel.findByIdAndUpdate(id, reminder, { new: true }).exec();
    }
    async delete(id) {
        return await this.reminderModel.findByIdAndRemove(id).exec();
    }
    async update_from_appointment(id, date, hour) {
        return await this.reminderModel.findByIdAndUpdate(id, { date: date, hour: hour }, { new: true }).exec();
    }
    async find_by_date_hour(date, hour) {
        return await this.reminderModel.findOne({ 'date': date, 'hour': hour });
    }
    async delete_from_appointment(date, hour) {
        return await this.reminderModel.findOneAndRemove({ 'date': date, 'hour': hour });
    }
};
ReminderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Reminder')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ReminderService);
exports.ReminderService = ReminderService;
//# sourceMappingURL=reminder.service.js.map