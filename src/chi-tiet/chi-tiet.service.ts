import { Injectable } from '@nestjs/common';
import { CreateChiTietDto } from './dto/create-chi-tiet.dto';
import { UpdateChiTietDto } from './dto/update-chi-tiet.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ChiTietService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}
  async create(token: string, body: CreateChiTietDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { pId, spId, donGia, soLuong } = body;
      const thongTinPhieu = await prisma.phieu.findFirst({
        where: {
          pId,
          sId,
          sta: true,
        },
      });
      if (thongTinPhieu) {
        const { ngay, loaiPhieu } = thongTinPhieu;
        const checkSpId = await prisma.bangChiTiet.findFirst({
          where: {
            spId,
            donGia,
            pId,
            loaiPhieu,
            sId,
            sta: true,
          },
        });
        if (checkSpId) {
          const congDon = await prisma.bangChiTiet.updateMany({
            where: {
              spId,
              pId,
              loaiPhieu,
              sId,
            },
            data: {
              soLuong: { increment: soLuong },
            },
          });
          if (congDon) {
            return this.extraService.response(200, 'đã thêm chi tiết', []);
          }
        } else {
          const data = {
            ...body,
            ngay,
            loaiPhieu,
            sId,
          };
          const create = await prisma.bangChiTiet.create({
            data,
          });
          if (create) {
            return this.extraService.response(200, 'đã thêm chi tiết', []);
          }
        }
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async getChiTietNhap(token: string) {
    try {
      const sId = await this.extraService.getSId(token);
      const chiTietNhap = await prisma.phieu.findMany({
        where: {
          sId,
          loaiPhieu: 'pn',
          trangThai: 'luu',
          sta: true,
        },
        include: {
          bangChiTiet: true,
          doiTac: true,
        },
        orderBy:{
          pId: 'desc'
        }
      });
      if (chiTietNhap.length > 0) {
        const res = chiTietNhap.map((item) => {
          const { soTien, thanhToan, soPhieu, bangChiTiet, doiTac } = item;
          const conNo = Number(soTien) - Number(thanhToan);
          const chiTietMapped = bangChiTiet.map((item) => {
            const { quyDoi, donGia, soLuong } = item;

            const thanhTien = Number(donGia) * Number(soLuong);
            return {
              ...item,
              quyDoi: Number(quyDoi),
              donGia: Number(donGia),
              soLuong: Number(soLuong),
              thanhTien,
              soPhieu,
            };
          });
          return {
            ...item,
            bangChiTiet: chiTietMapped,
            soTien: Number(soTien),
            thanhToan: Number(thanhToan),
            conNo,
          };
        });
        return this.extraService.response(200, 'chi tiết nhập', res);
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async timChiTietNhap(token: string, keyword: string) {
    try {
      // console.log(keyword)
      const sId = await this.extraService.getSId(token);
      const chiTietNhap = await prisma.phieu.findMany({
        where: {
          sId,
          loaiPhieu: 'pn',
          sta: true,
          OR: [
            {
              maDoiTac: {
                contains: keyword
              },
            },
            {
              soPhieu: {
                contains: keyword
              },
            }
          ]
        },
        include: {
          bangChiTiet: true,
          doiTac: true,
        },
        orderBy:{
          pId: 'desc'
        }
      });
      if (chiTietNhap.length > 0) {
        const res = chiTietNhap.map((item) => {
          const { soTien, thanhToan, soPhieu, bangChiTiet, doiTac } = item;
          const conNo = Number(soTien) - Number(thanhToan);
          const chiTietMapped = bangChiTiet.map((item) => {
            const { quyDoi, donGia, soLuong } = item;

            const thanhTien = Number(donGia) * Number(soLuong);
            return {
              ...item,
              quyDoi: Number(quyDoi),
              donGia: Number(donGia),
              soLuong: Number(soLuong),
              thanhTien,
              soPhieu,
            };
          });
          return {
            ...item,
            bangChiTiet: chiTietMapped,
            soTien: Number(soTien),
            thanhToan: Number(thanhToan),
            conNo,
          };
        });
        return this.extraService.response(200, 'chi tiết nhập', res);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async suaChiTietDaLuu(token: string, pId: number) {
    try {
      const sId = await this.extraService.getSId(token)
      const thongTinSanPham = await prisma.bangChiTiet.findMany({
        where: {
          pId,
          sId,
          sta: true
        }
      })
      if(thongTinSanPham.length > 0) {
        //trừ kho
        thongTinSanPham.forEach(async (item) => {
          const {kId, soLuong, quyDoi, loaiPhieu} = item

          if(loaiPhieu === 'pn') {
          const truKho = await prisma.sanPham.updateMany({
            where: {
              kId, 
              sId, 
              sta: true,
            },
            data: {
              soLuong: {
                decrement: Number(soLuong) * Number(quyDoi)
              }
            }
          })
          } else {
            const truKho = await prisma.sanPham.updateMany({
            where: {
              kId, 
              sId, 
              sta: true,
            },
            data: {
              soLuong: {
                increment: Number(soLuong) * Number(quyDoi)
              }
            }
          })
          }

        })
        const suaPhieu = await prisma.phieu.updateMany({
          where: {
            pId,
            trangThai: 'luu',
            sId,
            sta: true,
          },
          data: {
            trangThai: 'moiTao'
          }
        })

        if(suaPhieu.count > 0) {
          return this.extraService.response(200, 'đã sữa', pId)
        } else {
          return this.extraService.response(500, 'lỗi', null)
        }
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }


  findOne(id: number) {
    return `This action returns a #${id} chiTiet`;
  }

  update(id: number, updateChiTietDto: UpdateChiTietDto) {
    return `This action updates a #${id} chiTiet`;
  }

  async remove(token: string, dId: number) {
    try {
      console.log(dId);
      const sId = await this.extraService.getSId(token);
      const xoa = await prisma.bangChiTiet.updateMany({
        where: {
          dId,
          sId,
          sta: true,
        },
        data: {
          sta: false,
        },
      });
      if (xoa.count > 0) {
        return this.extraService.response(200, 'đã xoá', dId);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lôi', error);
    }
  }
}
