import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(ownerId: string, note: CreateNoteDto) {
    const diary = await this.findOne(ownerId, note.diaryId);

    if (!diary) throw new NotFoundException();

    return await this.prismaService.note.create({ data: note });
  }

  async update(ownerId: string, id: string, note: UpdateNoteDto) {
    return await this.prismaService.note.update({
      where: {
        id,
        diary: {
          ownerId,
        },
      },
      data: note,
    });
  }

  async findOne(ownerId: string, id: string) {
    return await this.prismaService.note.findFirstOrThrow({
      where: {
        id,
        diary: {
          ownerId,
        },
      },
    });
  }

  async findAll(ownerId: string) {
    return await this.prismaService.note.findMany({
      where: {
        diary: {
          ownerId,
        },
      },
    });
  }

  async delete(ownerId: string, id: string) {
    return await this.prismaService.note.delete({
      where: {
        id,
        diary: {
          ownerId,
        },
      },
    });
  }
}
