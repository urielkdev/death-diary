import { Injectable } from '@nestjs/common';
import { CreateGuestDiaryDto } from './dto/create-guests-diaries.dto';
import { GuestDiaryDto } from './dto/guests-diaries.dto';
import { GuestsDiariesRepository } from './guests-diaries.repository';

@Injectable()
export class GuestsDiariesService {
  constructor(private guestsDiariesRepository: GuestsDiariesRepository) {}

  create(createGuestsDiariesDto: CreateGuestDiaryDto) {
    return this.guestsDiariesRepository.create(createGuestsDiariesDto);
  }

  findAll() {
    return this.guestsDiariesRepository.findAll();
  }

  findOne(guestDiaryDto: GuestDiaryDto) {
    return this.guestsDiariesRepository.findOne(guestDiaryDto);
  }

  remove(guestDiaryDto: GuestDiaryDto) {
    return this.guestsDiariesRepository.delete(guestDiaryDto);
  }
}
