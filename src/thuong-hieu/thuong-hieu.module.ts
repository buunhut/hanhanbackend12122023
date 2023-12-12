import { Module } from '@nestjs/common';
import { ThuongHieuService } from './thuong-hieu.service';
import { ThuongHieuController } from './thuong-hieu.controller';

@Module({
  controllers: [ThuongHieuController],
  providers: [ThuongHieuService],
})
export class ThuongHieuModule {}
