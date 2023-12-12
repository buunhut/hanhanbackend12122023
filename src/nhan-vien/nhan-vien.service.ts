import { Injectable, Headers } from '@nestjs/common';
import { CreateNhanVienDto, UpdateNhanVienDto } from './dto/create-nhan-vien.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class NhanVienService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async create(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const create = await prisma.nhanVien.create({
        data: {
          sId
        }
      })
      if(create) {
        return this.extraService.response(200, 'đã thêm nhân viên', create)
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async findAll(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const listNhanVien = await prisma.nhanVien.findMany({
        where: {
          sId,
          sta: true
        }
      })
      if(listNhanVien.length > 0) {
        return this.extraService.response(200, 'list nhân viên', listNhanVien)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} nhanVien`;
  }

  async update(token: string, body: UpdateNhanVienDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {nvId, tenNhanVien, soDt, diaChi, chucVu, mucLuong} = body
      const data = {
        tenNhanVien, soDt, diaChi, chucVu, mucLuong
      }
      const capNhat = await prisma.nhanVien.updateMany({
        where: {
          nvId,
          sId,
          sta: true,
        },
        data
      })
      if(capNhat.count >0) {
        return this.extraService.response(200, 'đã cập nhật', nvId)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }

      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async delete(token: string, nvId: number) {
    try {
      const sId = await this.extraService.getSId(token)
      const xoaNhanVien = await prisma.nhanVien.updateMany({
        where: {
          nvId,
          sta: true,
          sId,
        },
        data: {
          sta: false
        }
      })
      if(xoaNhanVien.count > 0) {
        return this.extraService.response(200, 'đã xoá', nvId)
      } else {
        return this.extraService.response(404, 'not found', nvId)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

 
}
