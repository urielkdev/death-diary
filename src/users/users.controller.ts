import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserData } from 'src/utils/get-user-data.decorator';
import { Public } from 'src/utils/global.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('me')
  findMe(@GetUserData() user) {
    return this.usersService.findOne(user.id);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Patch('me')
  update(@GetUserData() user, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }
}
