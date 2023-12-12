import { PartialType } from '@nestjs/swagger';
import { CreateKhoDto } from './create-kho.dto';

export class UpdateKhoDto extends PartialType(CreateKhoDto) {}
