import { prop } from "@typegoose/typegoose"
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"
import { IsObject, IsString } from "class-validator"


export class IButtons{
    @prop()
    text:string
    @prop()
    type:string
    @prop()
    style?:string
    @prop()
    value?:string 
}

export class channelOptions{
    @prop()
    text:string

    @prop()
    buttons?:{
        isInline:boolean
        
        buttons:IButtons[]
    }
}

export interface CampaingModel extends Base{}

export class CampaingModel extends TimeStamps{
    @prop()
    user:string

    @prop()
    name:string

    @prop()
    comment: string

    @prop()
    vkOptions:channelOptions

    @prop()
    telegramOptions:channelOptions

    @prop()
    whatsappOptions:channelOptions

    @prop()
    smsOptions:channelOptions
}