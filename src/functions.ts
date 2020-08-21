import {MessageAttachment} from "discord.js";

export const Attachment = (value: string) => {
    return new MessageAttachment (value);
}