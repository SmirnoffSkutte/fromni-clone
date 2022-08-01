import { IsEmail, IsNotEmpty, IsString} from "class-validator"

export class UpdateUserDto{
    // @IsEmail()
    // @IsNotEmpty()
    // email:string

    @IsString()
    name:string

    @IsString()
    surname:string

    @IsString()
    @IsNotEmpty()
    phone:string
}