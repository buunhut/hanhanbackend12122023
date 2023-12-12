import { Injectable } from '@nestjs/common';
import {
  UploadDanhMucDto,
  UploadSanPhamDto,
  UploadThuongHieuDto,
} from './app.dto';
import { ExtraService } from './service';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}
  //upload hình danh mục
  async uploadHinhDanhMuc(
    token: string,
    body: UploadDanhMucDto,
    file: Express.Multer.File,
  ) {
    try {
      const sId = await this.extraService.getSId(token);
      const { dmId } = body;
      const hinhAnh = file.filename;
      console.log(hinhAnh);
      const upHinh = await prisma.danhMuc.updateMany({
        where: {
          dmId: +dmId,
          sId,
          sta: true,
        },
        data: {
          hinhAnh,
        },
      });
      if (upHinh) {
        return this.extraService.response(200, 'đã up hình', upHinh);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async deleteHinhDanhMuc(token: string, dmId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      const checkDmId = await prisma.danhMuc.findFirst({
        where: {
          dmId,
          sId,
          sta: true,
        },
      });
      console.log(checkDmId);
      if (checkDmId) {
        const { hinhAnh } = checkDmId;
        // Xây dựng đường dẫn đầy đủ đến tệp hình ảnh trong thư mục public/img
        const imagePath = process.cwd() + '/public/img/' + hinhAnh;

        const xoa = await prisma.danhMuc.updateMany({
          where: {
            dmId,
            sId,
            sta: true,
          },
          data: {
            hinhAnh: null,
          },
        });
        if (xoa) {
          // Kiểm tra xem tệp hình ảnh tồn tại
          if (fs.existsSync(imagePath)) {
            // Xóa tệp hình ảnh
            fs.unlinkSync(imagePath);
          }
          return this.extraService.response(200, 'đã xoá hình', null);
        }
      } else {
        return this.extraService.response(404, 'not found', dmId);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  //upload hình thương hiệ
  async uploadHinhThuongHieu(
    token: string,
    body: UploadThuongHieuDto,
    file: Express.Multer.File,
  ) {
    try {
      const sId = await this.extraService.getSId(token);
      const { thId } = body;
      const hinhAnh = file.filename;
      const upHinh = await prisma.thuongHieu.updateMany({
        where: {
          thId: +thId,
          sId,
          sta: true,
        },
        data: {
          hinhAnh,
        },
      });
      if (upHinh) {
        return this.extraService.response(200, 'đã up hình', upHinh);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async deleteHinhThuongHieu(token: string, thId: number) {
    console.log(thId)
    try {
      const sId = await this.extraService.getSId(token);
      const checkThId = await prisma.thuongHieu.findFirst({
        where: {
          thId,
          sId,
          sta: true,
        },
      });

      console.log("check", checkThId)
      if (checkThId) {
        const { hinhAnh } = checkThId;
        // Xây dựng đường dẫn đầy đủ đến tệp hình ảnh trong thư mục public/img
        const imagePath = process.cwd() + '/public/img/' + hinhAnh;

        const xoa = await prisma.thuongHieu.updateMany({
          where: {
            thId,
            sId,
            sta: true,
          },
          data: {
            hinhAnh: null,
          },
        });
        if (xoa) {
          // Kiểm tra xem tệp hình ảnh tồn tại
          if (fs.existsSync(imagePath)) {
            // Xóa tệp hình ảnh
            fs.unlinkSync(imagePath);
          }
          return this.extraService.response(200, 'đã xoá hình', null);
        }
      } else {
        return this.extraService.response(404, 'not found', thId);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  //upload hình sản phẩm
  async uploadHinhSanPham(
    token: string,
    body: UploadSanPhamDto,
    file: Express.Multer.File,
  ) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId } = body;
      const hinhAnh = file.filename;
      const upHinh = await prisma.sanPham.updateMany({
        where: {
          spId: +spId,
          sId,
          sta: true,
        },
        data: {
          hinhAnh,
        },
      });
      if (upHinh) {
        return this.extraService.response(200, 'đã up hình', upHinh);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async deleteHinhSanPham(token: string, spId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      const checkSpId = await prisma.sanPham.findFirst({
        where: {
          spId,
          sId,
          sta: true,
        },
      });
      if (checkSpId) {
        const { hinhAnh } = checkSpId;
        // Xây dựng đường dẫn đầy đủ đến tệp hình ảnh trong thư mục public/img
        const imagePath = process.cwd() + '/public/img/' + hinhAnh;

        const xoa = await prisma.sanPham.updateMany({
          where: {
            spId,
            sId,
            sta: true,
          },
          data: {
            hinhAnh: null,
          },
        });
        if (xoa) {
          // Kiểm tra xem tệp hình ảnh tồn tại
          if (fs.existsSync(imagePath)) {
            // Xóa tệp hình ảnh
            fs.unlinkSync(imagePath);
          }
          return this.extraService.response(200, 'đã xoá hình', null);
        }
      } else {
        return this.extraService.response(404, 'not found', spId);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
}
