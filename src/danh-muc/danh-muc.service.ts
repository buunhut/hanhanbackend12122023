import { async } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ExtraService } from 'src/service';
import { UpdateDanhMucDto } from './dto/create-danh-muc.dto';
const prisma = new PrismaClient();
import * as fs from 'fs';


@Injectable()
export class DanhMucService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async read(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const listDanhMuc = await prisma.danhMuc.findMany({
        where: {
          sId, 
          sta: true
        },
        orderBy: {
          dmId: 'desc'
        }
      })
      if(listDanhMuc.length > 0) {
        return this.extraService.response(200, 'list danh mục', listDanhMuc)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async create(token: string) {
    try {
      const sId = await this.extraService.getSId(token);
      const create = await prisma.danhMuc.create({
        data: {
          sId,
        },
      });
      if (create) {
        return this.extraService.response(200, 'đã tạo danh mục', create);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async update(token: string, body: UpdateDanhMucDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { dmId, tenDanhMuc } = body;
      const checkTen = await prisma.danhMuc.findFirst({
        where: {
          tenDanhMuc,
          sId,
          sta: true,
          NOT: {
            dmId,
          },
        },
      });
      if (checkTen) {
        return this.extraService.response(
          206,
          'trùng tên danh mục',
          tenDanhMuc,
        );
      } else {
        const update = await prisma.danhMuc.updateMany({
          where: {
            dmId,
            sId,
            sta: true,
          },
          data: {
            tenDanhMuc,
          },
        });
        if (update) {
          return this.extraService.response(200, 'đã cập nhật', tenDanhMuc);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async delete(token: string, dmId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      const checkDmId = await prisma.danhMuc.findFirst({
        where: {
          dmId,
          sId,
          sta: true,
        },
      });
      if (checkDmId) {
        const { hinhAnh } = checkDmId;
        // Xây dựng đường dẫn đầy đủ đến tệp hình ảnh trong thư mục public/img
        const imagePath = process.cwd() + '/public/img/' + hinhAnh;

        const xoaDanhMuc = await prisma.danhMuc.updateMany({
          where: {
            dmId,
            sId,
            sta: true,
          },
          data: {
            sta: false,
          },
        });
        if (xoaDanhMuc) {
          // Kiểm tra xem tệp hình ảnh tồn tại
          if (fs.existsSync(imagePath)) {
            // Xóa tệp hình ảnh
            fs.unlinkSync(imagePath);
          }
          return this.extraService.response(200, 'đã xoá danh mục', null);
        }
      } else {
        return this.extraService.response(404, 'not found', dmId);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async search(token: string, keyword: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const result = await prisma.danhMuc.findMany({
        where: {
          sId, 
          sta: true,
          OR: [
            {
              tenDanhMuc: {
                contains: keyword
              }
            }
          ]
        }
      })
      if(result.length > 0) {
        return this.extraService.response(200, 'kết quả tìm kiếm', result)
      } else {
        return this.extraService.response(404, 'not found', [] )
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
}
