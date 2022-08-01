import { IsNumber, IsObject, IsString } from "class-validator"
import { channelOptions } from "./campaing.model"

export class CreateCampaingDto {
    @IsNumber()
    user:string

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