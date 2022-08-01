import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import {hash,genSalt,compare} from 'bcryptjs'
import { JwtService } from "@nestjs/jwt";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { UserModel } from "src/user/user.model";
import { InjectModel } from "nestjs-typegoose";



@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userRepository:ModelType<UserModel>,
        private readonly jwtService: JwtService
    ){}

    async login(dto:AuthDto){
        const user = await this.validateUser(dto)
        const token=await this.issueToken(String(user._id))
        return {
            user: this.returnUserFields(user),
            token:token
        }
    }


    async register(dto:AuthDto) {
        const oldUser = await this.userRepository.findOne({email: dto.email})
        if(oldUser){
            throw new BadRequestException('Уже есть пользователь с таким email')
        }
        const salt= await genSalt(10)

        const newUser = await this.userRepository.create({
            email:dto.email,
            password:await hash(dto.password,salt),
            surname:"",
            name:"",
            phone:""
        })

        const user = await newUser.save()

        const token=await this.issueToken(String(user._id))
        
        return {
            user: this.returnUserFields(user),
            token:token
        }
    }

    async validateUser(dto:AuthDto):Promise<UserModel>{
        const user = await this.userRepository.findOne({email: dto.email})
        if(!user) throw new UnauthorizedException('Пользователь c таким email не найден')

        const isValidPassword= await compare(dto.password,user.password)
        if(!isValidPassword) throw new UnauthorizedException('Неправильный пароль')

        return user
    }

    async issueToken(userId:string){
        const data = {_id:userId}

        // const refreshToken = await this.jwtService.signAsync(data,{
        //     expiresIn:'15d'
        // })

        const accessToken = await this.jwtService.signAsync(data,{
            expiresIn:'1h'
        })

        return accessToken

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