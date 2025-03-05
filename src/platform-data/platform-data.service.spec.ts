import { Test, TestingModule } from '@nestjs/testing';
import { PlatformDataService } from './platform-data.service';

describe('PlatformDataService', () => {
  let service: PlatformDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatformDataService],
    }).compile();

    service = module.get<PlatformDataService>(PlatformDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
