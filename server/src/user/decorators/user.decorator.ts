import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserModel } from "../user.model";

type TypeData= keyof UserModel

export const CurrentUser = createParamDecorator((data:TypeData,ctx: ExecutionContext)=>{
    const request= ctx.switchToHttp().getRequest()
    const user=request.user


    return data ? user[data] : user

})
