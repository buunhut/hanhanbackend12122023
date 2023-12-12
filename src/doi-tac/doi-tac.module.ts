import { Module } from '@nestjs/common';
import { DoiTacService } from './doi-tac.service';
import { DoiTacController } from './doi-tac.controller';

@Module({
  controllers: [DoiTacController],
  providers: [DoiTacService],
})
export class DoiTacModule {}
