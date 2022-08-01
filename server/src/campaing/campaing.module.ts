import { Module } from '@nestjs/common';
import { CampaingService } from './campaing.service';
import { CampaingController } from './campaing.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CampaingModel } from './campaing.model';

@Module({
  imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: CampaingModel,
				schemaOptions: {
					collection: 'Campaings',
				},
			},
		]),
	],
  providers: [CampaingService],
  controllers: [CampaingController]
})
export class CampaingModule {}
