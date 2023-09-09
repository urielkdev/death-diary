import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Injectable()
export class DiariesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(ownerId: string, diary: CreateDiaryDto) {
    return await this.prismaService.diary.create({
      data: { ...diary, ownerId },
    });
  }

  async update(ownerId: string, id: string, diary: UpdateDiaryDto) {
    return await this.prismaService.diary.update({
      where: { ownerId, id },
      data: diary,
    });
  }

  async findOne(ownerId: string, id: string) {
    return await this.prismaService.diary.findUniqueOrThrow({
      where: { ownerId, id },
      select: {
        id: true,
        title: true,
        description: true,
        notes: {
          select: {
            id: true,
            content: true,
          },
        },
      },
    });
  }

  async findOneWithGuests(ownerId: string, id: string) {
    return await this.prismaService.diary.findUniqueOrThrow({
      where: { ownerId, id },
      select: {
        id: true,
        title: true,
        description: true,
        notes: {
          select: {
            id: true,
            content: true,
          },
        },
        guestsDiaries: {
          select: {
            guest: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });
  }

  async findAll(ownerId: string) {
    return await this.prismaService.diary.findMany({ where: { ownerId } });
  }

  async delete(ownerId: string, id: string) {
    return await this.prismaService.diary.delete({ where: { ownerId, id } });
  }
}
