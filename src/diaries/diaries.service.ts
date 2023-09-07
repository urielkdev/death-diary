import { Injectable } from '@nestjs/common';
import { Diary } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Injectable()
export class DiariesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(diary: CreateDiaryDto): Promise<Diary> {
    return await this.prismaService.diary.create({ data: diary });
  }

  async update(id: string, diary: UpdateDiaryDto): Promise<Diary> {
    return await this.prismaService.diary.update({
      where: { id },
      data: diary,
    });
  }

  async findOne(id: string) {
    return await this.prismaService.diary.findUniqueOrThrow({
      where: { id },
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

  async findOneWithGuests(id: string) {
    return await this.prismaService.diary.findUniqueOrThrow({
      where: { id },
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

  async findAll(): Promise<Diary[]> {
    return await this.prismaService.diary.findMany();
  }

  async delete(id: string): Promise<Diary> {
    return await this.prismaService.diary.delete({
      where: { id },
    });
  }
}
