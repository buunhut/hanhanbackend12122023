import { Module } from '@nestjs/common';
import { TkNganHangService } from './tk-ngan-hang.service';
import { TkNganHangController } from './tk-ngan-hang.controller';

@Module({
  controllers: [TkNganHangController],
  providers: [TkNganHangService],
})
export class TkNganHangModule {}
