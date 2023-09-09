import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserData } from 'src/utils/get-user-data.decorator';
import { DiariesService } from './diaries.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@ApiTags('Diary')
@Controller('diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}

  @Post()
  create(@GetUserData() user, @Body() createDiaryDto: CreateDiaryDto) {
    return this.diariesService.create(user.id, createDiaryDto);
  }

  @Get(':id')
  findOne(@GetUserData() user, @Param('id') id: string) {
    return this.diariesService.findOne(user.id, id);
  }

  @Get(':id/guests')
  findOneWithGuests(@GetUserData() user, @Param('id') id: string) {
    return this.diariesService.findOneWithGuests(user.id, id);
  }

  @Get()
  findAll(@GetUserData() user) {
    return this.diariesService.findAll(user.id);
  }

  @Patch(':id')
  update(
    @GetUserData() user,
    @Param('id') id: string,
    @Body() updateDiaryDto: UpdateDiaryDto,
  ) {
    return this.diariesService.update(user.id, id, updateDiaryDto);
  }

  @Delete(':id')
  delete(@GetUserData() user, @Param('id') id: string) {
    return this.diariesService.delete(user.id, id);
  }
}
