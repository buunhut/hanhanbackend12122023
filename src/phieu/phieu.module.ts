import { Module } from '@nestjs/common';
import { PhieuService } from './phieu.service';
import { PhieuController } from './phieu.controller';

@Module({
  controllers: [PhieuController],
  providers: [PhieuService],
})
export class PhieuModule {}
