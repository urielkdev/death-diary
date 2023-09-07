import { Injectable } from '@nestjs/common';
import { encryptPassword } from 'src/utils/utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const userToCreate = {
      ...createUserDto,
      password: await encryptPassword(createUserDto.password),
    };

    return this.usersRepository.create(userToCreate);
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findOneByUsername(username: string) {
    return this.usersRepository.findOneByUsername(username);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
