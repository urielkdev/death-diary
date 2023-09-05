import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class GuestDiaryDto {
  @ApiProperty()
  @IsString()
  @IsUUID()
  guestId: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  diaryId: string;
}
