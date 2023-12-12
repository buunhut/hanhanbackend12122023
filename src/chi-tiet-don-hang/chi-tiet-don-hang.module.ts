import { Module } from '@nestjs/common';
import { ChiTietDonHangService } from './chi-tiet-don-hang.service';
import { ChiTietDonHangController } from './chi-tiet-don-hang.controller';

@Module({
  controllers: [ChiTietDonHangController],
  providers: [ChiTietDonHangService],
})
export class ChiTietDonHangModule {}
