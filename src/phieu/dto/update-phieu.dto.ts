import { PartialType } from '@nestjs/swagger';
import { CreatePhieuDto } from './create-phieu.dto';

export class UpdatePhieuDto extends PartialType(CreatePhieuDto) {}
