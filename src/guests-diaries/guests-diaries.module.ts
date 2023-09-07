import { Module } from '@nestjs/common';
import { GuestsDiariesController } from './guests-diaries.controller';
import { GuestsDiariesService } from './guests-diaries.service';

@Module({
  controllers: [GuestsDiariesController],
  providers: [GuestsDiariesService],
})
export class GuestsDiariesModule {}
