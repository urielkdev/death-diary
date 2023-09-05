import { Injectable } from '@nestjs/common';
import { GuestDiary } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestDiaryDto } from './dto/guests-diaries.dto';

@Injectable()
export class GuestsDiariesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(guestDiaryDto: CreateGuestDiaryDto): Promise<GuestDiary> {
    return await this.prismaService.guestDiary.create({
      data: guestDiaryDto,
    });
  }

  async findOne(guestDiaryDto: GuestDiaryDto) {
    const a = await this.prismaService.guestDiary.findUniqueOrThrow({
      where: { guestIdDiaryId: guestDiaryDto },
      select: {
        guest: {
          select: {
            id: true,
            username: true,
          },
        },
        diary: {
          select: {
            id: true,
            title: true,
            description: true,
            owner: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });

    return a;
  }

  async findAll(): Promise<GuestDiary[]> {
    return await this.prismaService.guestDiary.findMany();
  }

  async delete(guestDiaryDto: GuestDiaryDto): Promise<GuestDiary> {
    return await this.prismaService.guestDiary.delete({
      where: { guestIdDiaryId: guestDiaryDto },
    });
  }
}
