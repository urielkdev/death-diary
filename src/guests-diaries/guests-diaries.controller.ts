import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestsDiariesService } from './guests-diaries.service';

@Controller('guests-diaries')
export class GuestsDiariesController {
  constructor(private readonly guestsDiariesService: GuestsDiariesService) {}

  @Post()
  @ApiTags('GuestDiary')
  create(@Body() createGuestsDiariesDto: CreateGuestDiaryDto) {
    return this.guestsDiariesService.create(createGuestsDiariesDto);
  }

  @Get(':guestId/:diaryId')
  @ApiTags('GuestDiary')
  findOne(
    @Param('guestId') guestId: string,
    @Param('diaryId') diaryId: string,
  ) {
    return this.guestsDiariesService.findOne({ guestId, diaryId });
  }

  @Get()
  @ApiTags('GuestDiary')
  findAll() {
    return this.guestsDiariesService.findAll();
  }

  @Delete(':guestId/:diaryId')
  @ApiTags('GuestDiary')
  remove(@Param('guestId') guestId: string, @Param('diaryId') diaryId: string) {
    return this.guestsDiariesService.remove({ guestId, diaryId });
  }
}
