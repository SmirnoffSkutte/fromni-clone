import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { CampaingModel } from 'src/campaing/campaing.model'

export interface UserModel extends Base{}

export class UserModel extends TimeStamps{
	@prop({ unique: true })
	email: string

	@prop()
	password: string

	@prop()
	name:string

	@prop()
	surname:string

	@prop()
	phone:string
}