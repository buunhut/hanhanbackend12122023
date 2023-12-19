import { async } from 'rxjs';
import { SanPham } from './../san-pham/entities/san-pham.entity';
import { Injectable } from '@nestjs/common';
import { CheckSoDtUserDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async getTatCaSanPham() {
    try {
      const tatCaSanPham = await prisma.sanPham.findMany({
        where: {
          sho: true,
          sta: true,
        },
        select: {
          spId: true,
          tenSp: true,
          dvt: true,
          kId: true,
          soLuong: true,
          quyDoi: true,
          giaBan: true,
          giaGiam: true,
          phiVc: true,
          maxOrder: true,
          hinhAnh: true,
          sId: true,
        },
      });
      if (tatCaSanPham.length > 0) {
        const res = tatCaSanPham.map((item) => {
          const { giaBan, giaGiam, soLuong, quyDoi, phiVc } = item;
          return {
            ...item,
            giaBan: Number(giaBan),
            giaGiam: Number(giaGiam),
            phiVc: Number(phiVc),
            soLuong: Number(soLuong),
            quyDoi: Number(quyDoi),
          };
        });
        return this.extraService.response(200, 'tất cả sản phẩm', res);
      } else {
        return this.extraService.response(404, 'not found', []);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async timKiemSanPham(keyword: string) {
    try {
      const tatCaSanPham = await prisma.sanPham.findMany({
        where: {
          sho: true,
          sta: true,
          OR: [
            {
              tenSp: {
                contains: keyword,
              }
            }
          ]
        },
        select: {
          spId: true,
          tenSp: true,
          dvt: true,
          kId: true,
          soLuong: true,
          quyDoi: true,
          giaBan: true,
          giaGiam: true,
          phiVc: true,
          maxOrder: true,
          hinhAnh: true,
          sId: true,
        },
      });
      if (tatCaSanPham.length > 0) {
        const res = tatCaSanPham.map((item) => {
          const { giaBan, giaGiam, soLuong, quyDoi, phiVc } = item;
          return {
            ...item,
            giaBan: Number(giaBan),
            giaGiam: Number(giaGiam),
            phiVc: Number(phiVc),
            soLuong: Number(soLuong),
            quyDoi: Number(quyDoi),
          };
        });
        return this.extraService.response(200, 'tất cả sản phẩm', res);
      } else {
        return this.extraService.response(404, 'not found', []);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async getTatCaSanPhamByDanhMuc() {
    try {
      const sanPhamByDanhMuc = await prisma.danhMuc.findMany({
        where: {
          sta: true,
        },
        orderBy: {
          tenDanhMuc: 'asc'
        },
        select: {
          tenDanhMuc: true,
          hinhAnh: true,
          thuongHieu: {
            select: {
              tenThuongHieu: true,
              hinhAnh: true,
              sanPham: {
                select: {
                  spId: true,
                  tenSp: true,
                  dvt: true,
                  kId: true,
                  soLuong: true,
                  quyDoi: true,
                  giaBan: true,
                  giaGiam: true,
                  phiVc: true,
                  maxOrder: true,
                  hinhAnh: true,
                  sId: true,
                },
                where: {
                  sho: true,
                  sta: true,
                },
              },
            },
          },
        },
      });
      if (sanPhamByDanhMuc.length > 0) {
        const res = sanPhamByDanhMuc.map((item) => {
          const listSanPham = [];
          const { tenDanhMuc, hinhAnh, thuongHieu } = item;
          thuongHieu.map((thuongHieuItem) => {
            const { sanPham } = thuongHieuItem;
            const sanPhamMapped = sanPham.map((sanPhamItem) => {
              const { soLuong, quyDoi, giaBan, giaGiam, phiVc, maxOrder } =
                sanPhamItem;
              const sanPham = {
                ...sanPhamItem,
                giaBan: Number(giaBan),
                giaGiam: Number(giaGiam),
                phiVc: Number(phiVc),
                soLuong: Number(soLuong),
                quyDoi: Number(quyDoi),
                maxOrder: Number(maxOrder),
              };
              listSanPham.push(sanPham);
            });
          });
          return {
            tenDanhMuc,
            hinhAnh,
            sanPham: listSanPham,
          };
        });
        return this.extraService.response(200, 'sản phẩm by danh mục', res);
      } else {
        return this.extraService.response(404, 'not found', []);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async getTatCaSanPhamByThuongHieu() {
    try {
      const sanPhamByThuongHieu = await prisma.thuongHieu.findMany({
        where: {
          sta: true,
        },
        orderBy: {
          tenThuongHieu: 'asc'
        },
        select: {
          tenThuongHieu: true,
          hinhAnh: true,
          sanPham: {
            select: {
              spId: true,
              tenSp: true,
              dvt: true,
              kId: true,
              soLuong: true,
              quyDoi: true,
              giaBan: true,
              giaGiam: true,
              phiVc: true,
              maxOrder: true,
              hinhAnh: true,
              sId: true,
            },
            where: {
              sho: true,
              sta: true,
            },
          },
        },
      });
      if (sanPhamByThuongHieu.length > 0) {
        const res = sanPhamByThuongHieu.map((item) => {
          const { sanPham } = item;
          const sanPhamMapped = sanPham.map((sanPhamItem) => {
            const { soLuong, quyDoi, giaBan, giaGiam, phiVc, maxOrder } =
              sanPhamItem;
            return {
              ...sanPhamItem,
              giaBan: Number(giaBan),
              giaGiam: Number(giaGiam),
              phiVc: Number(phiVc),
              soLuong: Number(soLuong),
              quyDoi: Number(quyDoi),
              maxOrder: Number(maxOrder),
            };
          });
          return {
            ...item,
            sanPham: sanPhamMapped,
          };
        });
        return this.extraService.response(200, 'sản phẩm by thương hiệu', res)
      } else {
        return this.extraService.response(404, 'not found', []);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async dangKy(body: CreateUserDto) {
    try {
      const soDt = body.soDt.replace('+84', '0')
      const check = await prisma.users.findFirst({
        where:{
        soDt,
        sta: true
        }
      })
      if(check) {
        return this.extraService.response(209, 'số đt đã đk', soDt)
      } else {
        const data = {...body, soDt}
        const dangKy = await prisma.users.create({
          data
        })
        if(dangKy) {
          return this.extraService.response(200, 'đk thành công', dangKy) 
        } else {
          return this.extraService.response(500, 'lỗi', null)
        }
  
      }

      
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async checkSoDt(body: CheckSoDtUserDto) {
    try {
      const soDt = body.soDt.replace('+84', '0')
      const check = await prisma.users.findFirst({
        where:{
        soDt,
        sta: true
        }
      })
      if(check) {
        return this.extraService.response(209, 'số đt đã đk', soDt)
      } else {
        return this.extraService.response(404, 'not found', soDt)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async dangNhap(body: CheckSoDtUserDto) {
    try {
      const soDt = body.soDt.replace('+84', '0')
      const dangNhap = await prisma.users.findFirst({
        where: {
          soDt,
          sta: true
        }
      })
      if(dangNhap) {
        const token = await this.extraService.signToken(dangNhap)
        const res = {
          ...dangNhap,
          token,
          matKhau: ''
        }
        return this.extraService.response(200, 'đang nhập thành công', res)
      } else {
        return this.extraService.response(404, 'đăng nhập thất bại', soDt)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }


}
