import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthDto{
    @IsEmail()
    email:string

    @MinLength(3,{
        message:'Хотя бы 3 символа :)'
    })
    @IsString()
    password:string
}