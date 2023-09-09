import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserData } from 'src/utils/get-user-data.decorator';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestsDiariesService } from './guests-diaries.service';

@ApiTags('GuestDiary')
@Controller('guests-diaries')
export class GuestsDiariesController {
  constructor(private readonly guestsDiariesService: GuestsDiariesService) {}

  @Post()
  create(
    @GetUserData() user,
    @Body() createGuestsDiariesDto: CreateGuestDiaryDto,
  ) {
    return this.guestsDiariesService.create(user.id, createGuestsDiariesDto);
  }

  @Delete(':guestId/:diaryId')
  delete(
    @GetUserData() user,
    @Param('guestId') guestId: string,
    @Param('diaryId') diaryId: string,
  ) {
    return this.guestsDiariesService.delete(user.id, { guestId, diaryId });
  }
}
