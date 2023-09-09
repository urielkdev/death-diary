import { Injectable, NotFoundException } from '@nestjs/common';
import { DiariesService } from 'src/diaries/diaries.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestDiaryDto } from './dto/guests-diaries.dto';

@Injectable()
export class GuestsDiariesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly diariesService: DiariesService,
  ) {}

  async create(ownerId: string, guestDiaryDto: CreateGuestDiaryDto) {
    const diary = await this.diariesService.findOne(
      ownerId,
      guestDiaryDto.diaryId,
    );

    if (!diary) throw new NotFoundException();

    return await this.prismaService.guestDiary.create({
      data: guestDiaryDto,
    });
  }

  async delete(ownerId: string, guestDiaryDto: GuestDiaryDto) {
    return await this.prismaService.guestDiary.delete({
      where: { guestIdDiaryId: guestDiaryDto, diary: { ownerId } },
    });
  }
}
