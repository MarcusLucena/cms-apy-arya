import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlatformDataService } from './platform-data.service';
import { CreatePlatformDatumDto } from './dto/create-platform-datum.dto';
import { UpdatePlatformDatumDto } from './dto/update-platform-datum.dto';

@Controller('platform-data')
export class PlatformDataController {
  constructor(private readonly platformDataService: PlatformDataService) {}

  @Post()
  create(@Body() createPlatformDatumDto: CreatePlatformDatumDto) {
    return this.platformDataService.create(createPlatformDatumDto);
  }

  @Get()
  findAll() {
    return this.platformDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platformDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlatformDatumDto: UpdatePlatformDatumDto) {
    return this.platformDataService.update(+id, updatePlatformDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platformDataService.remove(+id);
  }
}
