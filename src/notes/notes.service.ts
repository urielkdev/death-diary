import { Injectable } from '@nestjs/common';
import { Note } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(diary: CreateNoteDto): Promise<Note> {
    return await this.prismaService.note.create({ data: diary });
  }

  async update(id: string, diary: UpdateNoteDto): Promise<Note> {
    return await this.prismaService.note.update({
      where: { id },
      data: diary,
    });
  }

  async findOne(id: string) {
    return await this.prismaService.note.findFirstOrThrow({ where: { id } });
  }

  async findAll(): Promise<Note[]> {
    return await this.prismaService.note.findMany();
  }

  async delete(id: string): Promise<Note> {
    return await this.prismaService.note.delete({ where: { id } });
  }
}
