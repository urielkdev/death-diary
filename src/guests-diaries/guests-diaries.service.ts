import { Injectable } from '@nestjs/common';
import { GuestDiary } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestDiaryDto } from './dto/guests-diaries.dto';

@Injectable()
export class GuestsDiariesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(guestDiaryDto: CreateGuestDiaryDto): Promise<GuestDiary> {
    return await this.prismaService.guestDiary.create({
      data: guestDiaryDto,
    });
  }

  async delete(guestDiaryDto: GuestDiaryDto): Promise<GuestDiary> {
    return await this.prismaService.guestDiary.delete({
      where: { guestIdDiaryId: guestDiaryDto },
    });
  }
}
