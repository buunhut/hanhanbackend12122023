import { Module } from '@nestjs/common';
import { DonHangService } from './don-hang.service';
import { DonHangController } from './don-hang.controller';

@Module({
  controllers: [DonHangController],
  providers: [DonHangService],
})
export class DonHangModule {}
