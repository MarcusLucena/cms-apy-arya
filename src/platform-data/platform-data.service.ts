import { Injectable } from '@nestjs/common';
import { CreatePlatformDatumDto } from './dto/create-platform-datum.dto';
import { UpdatePlatformDatumDto } from './dto/update-platform-datum.dto';

@Injectable()
export class PlatformDataService {
  create(createPlatformDatumDto: CreatePlatformDatumDto) {
    return 'This action adds a new platformDatum';
  }

  findAll() {
    return `This action returns all platformData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} platformDatum`;
  }

  update(id: number, updatePlatformDatumDto: UpdatePlatformDatumDto) {
    return `This action updates a #${id} platformDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} platformDatum`;
  }
}
