import { PartialType } from '@nestjs/mapped-types';
import { CreatePlatformDatumDto } from './create-platform-datum.dto';

export class UpdatePlatformDatumDto extends PartialType(CreatePlatformDatumDto) {}
