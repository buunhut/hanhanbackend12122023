import { Injectable } from '@nestjs/common';
import { CreateTkNganHangDto } from './dto/create-tk-ngan-hang.dto';
import { UpdateTkNganHangDto } from './dto/update-tk-ngan-hang.dto';

@Injectable()
export class TkNganHangService {
  create(createTkNganHangDto: CreateTkNganHangDto) {
    return 'This action adds a new tkNganHang';
  }

  findAll() {
    return `This action returns all tkNganHang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tkNganHang`;
  }

  update(id: number, updateTkNganHangDto: UpdateTkNganHangDto) {
    return `This action updates a #${id} tkNganHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} tkNganHang`;
  }
}
