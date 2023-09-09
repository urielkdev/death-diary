import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { encryptPassword } from 'src/utils/utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userToCreate = {
      ...createUserDto,
      password: await encryptPassword(createUserDto.password),
    };

    return await this.prismaService.user.create({ data: userToCreate });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userToCreate = {
      ...updateUserDto,
      password: await encryptPassword(updateUserDto.password),
    };

    return await this.prismaService.user.update({
      where: { id },
      data: userToCreate,
    });
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUniqueOrThrow({
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

  async findOneBy(where: Partial<Record<keyof User, any>>) {
    return await this.prismaService.user.findFirstOrThrow({
      where,
      select: {
        id: true,
        username: true,
        password: true,
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

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async delete(id: string) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
