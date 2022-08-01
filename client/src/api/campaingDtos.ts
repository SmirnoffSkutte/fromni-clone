export interface IButtons{
    text:string
    
    type:string
    
    style?:string
    
    value?:string 
}

export interface channelOptions{
    
    text:string
    
    buttons?:{
        isInline:boolean
        
        buttons:IButtons[]
    }
}

export interface CampaingModel{
    user:string

    name:string
    
    comment: string
    
    vkOptions:channelOptions
    
    telegramOptions:channelOptions
    
    whatsappOptions:channelOptions
    
    smsOptions:channelOptions
}