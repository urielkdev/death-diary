import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  diaryId: string;
}
