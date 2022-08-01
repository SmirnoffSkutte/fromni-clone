import { Body, Controller, HttpCode, Post, Res, UsePipes,ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService:AuthService){}

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    async login(@Body() dto:AuthDto){
     return this.AuthService.login(dto)
}

//   @UsePipes(new ValidationPipe())
//     @HttpCode(200)
//     @Post('login/access-token')
//     async getNewTokens(@Body() dto:RefreshTokenDto){
//      return this.AuthService.getNewTokens(dto)
// }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('registration')
    async register(@Body() dto:AuthDto){
     return this.AuthService.register(dto)
}

}