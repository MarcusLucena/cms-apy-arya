import { Test, TestingModule } from '@nestjs/testing';
import { PlatformDataController } from './platform-data.controller';
import { PlatformDataService } from './platform-data.service';

describe('PlatformDataController', () => {
  let controller: PlatformDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatformDataController],
      providers: [PlatformDataService],
    }).compile();

    controller = module.get<PlatformDataController>(PlatformDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
