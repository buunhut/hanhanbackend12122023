import { Module } from '@nestjs/common';
import { NhanVienService } from './nhan-vien.service';
import { NhanVienController } from './nhan-vien.controller';

@Module({
  controllers: [NhanVienController],
  providers: [NhanVienService],
})
export class NhanVienModule {}
