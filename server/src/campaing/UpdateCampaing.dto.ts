import {IsObject, IsString } from "class-validator";
import { channelOptions } from "./campaing.model";


export class UpdateCampaingDto {
    @IsString()
    name:string

    @IsObject()
    vkOptions:channelOptions

    @IsObject()
    telegramOptions:channelOptions

    @IsObject()
    whatsappOptions:channelOptions

    @IsObject()
    smsOptions:channelOptions

    @IsString()
    comment: string
}