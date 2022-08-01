import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'

import { ConfigModule } from '@nestjs/config'
import { UserModel } from './user.model'
import { TypegooseModule } from 'nestjs-typegoose'



@Module({
	controllers: [UserController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'Users',
				},
			},
		]),
		ConfigModule,
	],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
