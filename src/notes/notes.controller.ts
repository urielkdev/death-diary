import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserData } from 'src/utils/get-user-data.decorator';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@ApiTags('Note')
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@GetUserData() user, @Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(user.id, createNoteDto);
  }

  @Get()
  findAll(@GetUserData() user) {
    return this.notesService.findAll(user.id);
  }

  @Get(':id')
  findOne(@GetUserData() user, @Param('id') id: string) {
    return this.notesService.findOne(user.id, id);
  }

  @Patch(':id')
  update(
    @GetUserData() user,
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.update(user.id, id, updateNoteDto);
  }

  @Delete(':id')
  remove(@GetUserData() user, @Param('id') id: string) {
    return this.notesService.delete(user.id, id);
  }
}
