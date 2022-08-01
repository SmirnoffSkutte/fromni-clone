import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CampaingModel } from './campaing.model';
import { CreateCampaingDto } from './CreateCampaing.dto';
import { UpdateCampaingDto } from './UpdateCampaing.dto';

@Injectable()
export class CampaingService {
    constructor(@InjectModel(CampaingModel) private readonly campaingRepository:ModelType<CampaingModel>)
    {}

      async byId(_id:string){
        const campaing = await this.campaingRepository.findOne({_id})
        if(!campaing) throw new NotFoundException('Кампания не найдена')

        return campaing
    }
 
    async findAll(userId:string,searchTerm?:string) {
        let options={
            $or:[
                {   
                    user:userId,
                },
            ]
        }

        // if(searchTerm){
        // options={
        //     $or:[
        //         {   
        //             user:userId,
        //             name:new RegExp(searchTerm,'i')
        //         },
        //     ]
        // }
        // }
       
        return this.campaingRepository.find(options)
      }

      async create(userId:string){
        const defaultValue:CreateCampaingDto={
            user:userId,
            name:"",
            vkOptions:{
                text:"",
                buttons:{
                    isInline:true,
                    buttons:[]
                }
            },
            telegramOptions:{
                text:"",
                buttons:{
                    isInline:true,
                    buttons:[]
                }
            },
            whatsappOptions:{
                text:"",
                buttons:{
                    isInline:true,
                    buttons:[]
                }
            },
            smsOptions:{
                text:""
            },
            comment:""

        }
        // const newCampaing = await this.campaingRepository.create(defaultValue)
        const campaing=await this.campaingRepository.create(defaultValue)
        return campaing
    }

    async update(_id:string,dto:UpdateCampaingDto){
        const updateDoc = await this.campaingRepository.findByIdAndUpdate(_id,dto,{
            new:true
        }).exec()
        if (!updateDoc) throw new NotFoundException('Кампания не найдена')

        return updateDoc
    }

    async delete(_id:string){
        const campaing = await this.campaingRepository.findById(_id)
        if (!campaing) throw new NotFoundException('Кампания не найдена')
        await campaing.delete()
        return campaing
    }
}
