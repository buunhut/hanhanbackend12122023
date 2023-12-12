import { Injectable } from '@nestjs/common';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';
import { CreateThuongHieuDto, UpdateThuongHieuDto } from './dto/create-thuong-hieu.dto';
import * as fs from 'fs';


const prisma = new PrismaClient()

@Injectable()
export class ThuongHieuService {
    //kết thừa extraService để dùng
    constructor(private readonly extraService: ExtraService) {}

    async read(token: string) {
      try {
        const sId = await this.extraService.getSId(token)
        const listThuongHieu = await prisma.thuongHieu.findMany({
          where: {
            sId, 
            sta: true
          }, 
          orderBy: {
            thId: 'desc'
          }
        })
        if(listThuongHieu.length > 0) {
          return this.extraService.response(200, 'list thương hiệu', listThuongHieu)
        } else {
          return this.extraService.response(404, 'not found', [])
        }
      } catch (error) {
        return this.extraService.response(500, 'lỗi', error)
      }
    }
    async create(token: string, body: CreateThuongHieuDto) {
      try {
        const sId = await this.extraService.getSId(token);
        const data = {
          ...body,
          sId
        }
        console.log(data)
        const create = await prisma.thuongHieu.create({
          data
        });
        if (create) {
          return this.extraService.response(200, 'đã tạo thương hiệu', create);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      } catch (error) {
        return this.extraService.response(500, 'lỗi', error);
      }
    }
    async update(token: string, body: UpdateThuongHieuDto) {
      try {
        const sId = await this.extraService.getSId(token);
        const { thId, tenThuongHieu } = body;
        const checkTen = await prisma.thuongHieu.findFirst({
          where: {
            tenThuongHieu,
            sId,
            sta: true,
            NOT: {
              thId,
            },
          },
        });
        if (checkTen) {
          return this.extraService.response(
            207,
            'trùng tên thương hiệu',
            tenThuongHieu,
          );
        } else {
          const update = await prisma.thuongHieu.updateMany({
            where: {
              thId,
              sId,
              sta: true,
            },
            data: {
              tenThuongHieu,
            },
          });
          if (update) {
            return this.extraService.response(200, 'đã cập nhật', tenThuongHieu);
          } else {
            return this.extraService.response(500, 'lỗi', null);
          }
        }
      } catch (error) {
        return this.extraService.response(500, 'lỗi', error);
      }
    }
    async delete(token: string, thId: number) {
      try {
        const sId = await this.extraService.getSId(token);
        const checkThId = await prisma.thuongHieu.findFirst({
          where: {
            thId,
            sId,
            sta: true,
          },
        });
        if (checkThId) {
          const { hinhAnh } = checkThId;
          // Xây dựng đường dẫn đầy đủ đến tệp hình ảnh trong thư mục public/img
          const imagePath = process.cwd() + '/public/img/' + hinhAnh;
  
          const xoaDanhMuc = await prisma.thuongHieu.updateMany({
            where: {
              thId,
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
          return this.extraService.response(404, 'not found', thId);
        }
      } catch (error) {
        return this.extraService.response(500, 'lỗi', error);
      }
    }
    async search(token: string, keyword: string) {
      try {
        const sId = await this.extraService.getSId(token)
        const result = await prisma.thuongHieu.findMany({
          where: {
            sId, 
            sta: true,
            OR: [
              {
                tenThuongHieu: {
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
