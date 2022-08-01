import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { CampaingService } from './campaing.service';
import { UpdateCampaingDto } from './UpdateCampaing.dto';

@Controller('campaing')
export class CampaingController {
    constructor(private readonly campaingService: CampaingService) {}

	@Get()
	@Auth()
 	async getAll(@CurrentUser('_id')id:string,@Query('searchTerm') searchTerm?: string) {
     	return this.campaingService.findAll(id,searchTerm);
  	}

	@Get(':id')
	@Auth()
	async get(@Param('id') id: string) {
		return this.campaingService.byId(id)
	}

    @UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	@Auth()
	async create(@CurrentUser('_id')userId:string) {
		return this.campaingService.create(userId)
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth()
	async update(
		@Param('id') id: string,
		@Body() dto: UpdateCampaingDto,
	) {
		const updateGenre = await this.campaingService.update(id,dto)
		if (!updateGenre) throw new NotFoundException('Кампания не найдена')
		return updateGenre
	}

	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		const deletedDoc = await this.campaingService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Кампания не найдена')
        return deletedDoc
    }
}
