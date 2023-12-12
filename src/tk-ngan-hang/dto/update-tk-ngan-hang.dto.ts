import { PartialType } from '@nestjs/swagger';
import { CreateTkNganHangDto } from './create-tk-ngan-hang.dto';

export class UpdateTkNganHangDto extends PartialType(CreateTkNganHangDto) {}
