import { Module } from '@nestjs/common';
import { DiariesModule } from 'src/diaries/diaries.module';
import { GuestsDiariesController } from './guests-diaries.controller';
import { GuestsDiariesService } from './guests-diaries.service';

@Module({
  imports: [DiariesModule],
  controllers: [GuestsDiariesController],
  providers: [GuestsDiariesService],
})
export class GuestsDiariesModule {}
