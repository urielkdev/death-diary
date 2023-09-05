import { Test, TestingModule } from '@nestjs/testing';
import { GuestsDiariesService } from './guests-diaries.service';

describe('GuestsDiariesService', () => {
  let service: GuestsDiariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestsDiariesService],
    }).compile();

    service = module.get<GuestsDiariesService>(GuestsDiariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
