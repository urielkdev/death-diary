import { Test, TestingModule } from '@nestjs/testing';
import { GuestsDiariesController } from './guests-diaries.controller';
import { GuestsDiariesService } from './guests-diaries.service';

describe('GuestsDiariesController', () => {
  let controller: GuestsDiariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestsDiariesController],
      providers: [GuestsDiariesService],
    }).compile();

    controller = module.get<GuestsDiariesController>(GuestsDiariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
