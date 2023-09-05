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
import { DiariesService } from './diaries.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Controller('diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}

  @Post()
  @ApiTags('Diary')
  create(@Body() createDiaryDto: CreateDiaryDto) {
    return this.diariesService.create(createDiaryDto);
  }

  @Get(':id')
  @ApiTags('Diary')
  findOne(@Param('id') id: string) {
    return this.diariesService.findOne(id);
  }

  @Get(':id/guests')
  @ApiTags('Diary')
  findOneWithGuests(@Param('id') id: string) {
    return this.diariesService.findOneWithGuests(id);
  }

  @Get()
  @ApiTags('Diary')
  findAll() {
    return this.diariesService.findAll();
  }

  @Patch(':id')
  @ApiTags('Diary')
  update(@Param('id') id: string, @Body() updateDiaryDto: UpdateDiaryDto) {
    return this.diariesService.update(id, updateDiaryDto);
  }

  @Delete(':id')
  @ApiTags('Diary')
  remove(@Param('id') id: string) {
    return this.diariesService.remove(id);
  }
}
