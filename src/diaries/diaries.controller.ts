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

@ApiTags('Diary')
@Controller('diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}

  @Post()
  create(@Body() createDiaryDto: CreateDiaryDto) {
    return this.diariesService.create(createDiaryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diariesService.findOne(id);
  }

  @Get(':id/guests')
  findOneWithGuests(@Param('id') id: string) {
    return this.diariesService.findOneWithGuests(id);
  }

  @Get()
  findAll() {
    return this.diariesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiaryDto: UpdateDiaryDto) {
    return this.diariesService.update(id, updateDiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diariesService.remove(id);
  }
}
