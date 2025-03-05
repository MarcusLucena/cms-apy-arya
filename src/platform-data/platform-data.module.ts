import { Module } from '@nestjs/common';
import { PlatformDataService } from './platform-data.service';
import { PlatformDataController } from './platform-data.controller';

@Module({
  controllers: [PlatformDataController],
  providers: [PlatformDataService],
})
export class PlatformDataModule {}
