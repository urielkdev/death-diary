import { Module } from '@nestjs/common';
import { DiariesController } from './diaries.controller';
import { DiariesRepository } from './diaries.repository';
import { DiariesService } from './diaries.service';

@Module({
  controllers: [DiariesController],
  providers: [DiariesService, DiariesRepository],
  exports: [DiariesRepository],
})
export class DiariesModule {}
