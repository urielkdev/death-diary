import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({ data: user });
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    return await this.prismaService.user.update({
      where: { id },
      data: user,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        diaries: {
          select: {
            id: true,
            title: true,
            notes: {
              select: {
                id: true,
                content: true,
              },
            },
          },
        },
      },
    });
  }

  async delete(id: string): Promise<User> {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
