"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemindersSchema = void 0;
const mongoose = require("mongoose");
exports.RemindersSchema = new mongoose.Schema({
    title: String,
    date: { type: String, required: true },
    hour: { type: String, required: true }
});
//# sourceMappingURL=reminder.model.js.map