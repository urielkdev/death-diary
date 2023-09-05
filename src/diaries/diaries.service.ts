import { Injectable } from '@nestjs/common';
import { DiariesRepository } from './diaries.repository';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Injectable()
export class DiariesService {
  constructor(private diariesRepository: DiariesRepository) {}

  create(createDiaryDto: CreateDiaryDto) {
    return this.diariesRepository.create(createDiaryDto);
  }

  findOne(id: string) {
    return this.diariesRepository.findOne(id);
  }

  findOneWithGuests(id: string) {
    return this.diariesRepository.findOneWithGuests(id);
  }

  findAll() {
    return this.diariesRepository.findAll();
  }

  update(id: string, updateDiaryDto: UpdateDiaryDto) {
    return this.diariesRepository.update(id, updateDiaryDto);
  }

  remove(id: string) {
    return this.diariesRepository.delete(id);
  }
}
