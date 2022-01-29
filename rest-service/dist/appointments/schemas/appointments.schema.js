"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsSchema = void 0;
const mongoose = require("mongoose");
exports.AppointmentsSchema = new mongoose.Schema({
    description: String,
    date: { type: String, required: true },
    hour: { type: String, required: true }
});
//# sourceMappingURL=appointments.schema.js.map