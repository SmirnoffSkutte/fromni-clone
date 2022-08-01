import { Injectable, NotFoundException } from "@nestjs/common";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { InjectModel } from "nestjs-typegoose";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserModel } from "./user.model";


@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userRepository:ModelType<UserModel>)
    {}

    async byId(id:string){
        const user = await this.userRepository.findOne({
            where:{
                _id:id
            },
            relations:{
                campaings:true
            }
        })
        if(!user) throw new NotFoundException("Пользователь не найден")
        return user
    }

    async updateProfile(_id:string,dto:UpdateUserDto){
        const user = await this.byId(_id)
        // const isSameUser = await this.userRepository.findOne({email:dto.email})

        // if(isSameUser && _id !== String(isSameUser._id)){
        //     throw new NotFoundException('Email занят')
        // }

        user.phone=dto.phone
        user.name=dto.name
        // user.email=dto.email
        user.surname=dto.surname

        user.save()

        return this.returnUserFields(user)
    }

    returnUserFields(user:UserModel){
        return{
            _id:user._id,
            email:user.email,
            surname:user.surname,
            name:user.name,
            phone:user.phone
        }
    }

}