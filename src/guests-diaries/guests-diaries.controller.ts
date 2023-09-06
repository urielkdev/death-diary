import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestsDiariesService } from './guests-diaries.service';

@ApiTags('GuestDiary')
@Controller('guests-diaries')
export class GuestsDiariesController {
  constructor(private readonly guestsDiariesService: GuestsDiariesService) {}

  @Post()
  create(@Body() createGuestsDiariesDto: CreateGuestDiaryDto) {
    return this.guestsDiariesService.create(createGuestsDiariesDto);
  }

  @Delete(':guestId/:diaryId')
  remove(@Param('guestId') guestId: string, @Param('diaryId') diaryId: string) {
    return this.guestsDiariesService.remove({ guestId, diaryId });
  }
}
