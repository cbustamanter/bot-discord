"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const discord_js_1 = require("discord.js");
exports.Attachment = (value) => {
    return new discord_js_1.MessageAttachment(value);
};
