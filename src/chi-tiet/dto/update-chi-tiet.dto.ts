import { PartialType } from '@nestjs/swagger';
import { CreateChiTietDto } from './create-chi-tiet.dto';

export class UpdateChiTietDto extends PartialType(CreateChiTietDto) {}
