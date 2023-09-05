import { Module } from '@nestjs/common';
import { GuestsDiariesController } from './guests-diaries.controller';
import { GuestsDiariesRepository } from './guests-diaries.repository';
import { GuestsDiariesService } from './guests-diaries.service';

@Module({
  controllers: [GuestsDiariesController],
  providers: [GuestsDiariesService, GuestsDiariesRepository],
  exports: [GuestsDiariesRepository],
})
export class GuestsDiariesModule {}
