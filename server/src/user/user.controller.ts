import { Body, Controller, Get, HttpCode, Param, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "./decorators/user.decorator";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get('profile')
    @Auth()
    async getProfile(@CurrentUser('_id')id:string){
        return this.userService.byId(id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('update')
    @Auth()
    async updateProfile(@CurrentUser('_id')id:string,@Body() dto:UpdateUserDto){
        // const numId=Number(id)
        return this.userService.updateProfile(id,dto)
    }
}


