import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ExtraService } from 'src/service';

const prisma = new PrismaClient();

@Injectable()
export class KhoService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  // async create(token: string) {
  //   try {
  //     const sId = await this.extraService.getSId(token);
  //     const create = await prisma.kho.create({
  //       data: {
  //         sId,
  //       },
  //     });
  //     if (create) {
  //       const { kId } = create;
  //       const taoSanPham = await prisma.sanPham.create({
  //         data: {
  //           kId,
  //           sId,
  //         },
  //       });
  //       return this.extraService.response(200, 'đã tạo kho', taoSanPham);
  //     } else {
  //       return this.extraService.response(500, 'lỗi', null);
  //     }
  //   } catch (error) {
  //     return this.extraService.response(500, 'lỗi', error);
  //   }
  // }
}
