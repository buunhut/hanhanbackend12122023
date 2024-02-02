import { async } from 'rxjs';
import { SanPham } from './../san-pham/entities/san-pham.entity';
import { Injectable } from '@nestjs/common';
import { CapNhatTienLiXiDto, CheckSoDtUserDto, CheckThongTinDto, CreateUserDto, DangKyNhanLiXiDto, DangNhapDto, DemLuotTruyCapDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';
import { count } from 'console';

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
          // sId: 1
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
          sId: true,
          thuongHieu: {
            select: {
              tenThuongHieu: true,
              hinhAnh: true,
              sId: true,

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
          const { tenDanhMuc, hinhAnh, thuongHieu, sId } = item;
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
            sId,
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
          sId: true,
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
  async dangNhap(body: DangNhapDto) {
    try {
      const soDt = body.soDt.replace('+84', '0')
      const {matKhau} = body
      const dangNhap = await prisma.users.findFirst({
        where: {
          soDt,
          sta: true
        }
      })
      if(dangNhap) {
        const checkMatKhau = await prisma.users.findFirst({
          where: {
            soDt,
            matKhau,
            sta: true,
          }
        })
        if(checkMatKhau) {


        const token = await this.extraService.signToken(dangNhap)
        const res = {
          ...dangNhap,
          token,
          matKhau: ''
        }
        return this.extraService.response(200, 'đang nhập thành công', res)
      } else {
        return this.extraService.response(405, 'sai mật khẩu', matKhau)

      }


      } else {
        return this.extraService.response(404, 'sai số điện thoại', soDt)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  //của nodejs
  async demLuotTruyCap (body : DemLuotTruyCapDto ) {
    try {
      await prisma.demLuotTruyCap.create({
        data: body
      })
      const counts = await prisma.demLuotTruyCap.count({
        where: {
          diaChi: body.diaChi
        }
      })
      return this.extraService.response(200, 'lượt truy cập', counts)
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async checkThongTin (body: CheckThongTinDto) {
    try {
      const {thongTin} = body
      const check = await prisma.liXi.findFirst({
        where: {
          OR: [
            {
              hoVaTen: thongTin,
              liXi: {
                gt: 0
              }
            },
            {
              soTaiKhoan: thongTin,
              liXi: {
                gt: 0
              }
            }
          ]
        }
      })
      if(check) {
        return this.extraService.response(209, 'đã đăng ký', thongTin)
      } else {
        return this.extraService.response(200, 'hợp lệ', thongTin)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async dangKyNhanLiXi (body: DangKyNhanLiXiDto) {
    try {
      const {hoVaTen, soTaiKhoan} = body
      const checkHoVaTen = await prisma.liXi.findFirst({
        where: {
          hoVaTen,
          liXi: {
            gt: 0
          }
        }
      })
      if(checkHoVaTen) {
        return this.extraService.response(209, 'đã tồn tại', checkHoVaTen)
      } else {
        const checkSoTaiKhoan = await prisma.liXi.findFirst({
          where: {
            soTaiKhoan,
            liXi: {
              gt: 0
            }
          }
        })
        if(checkSoTaiKhoan) {
          return this.extraService.response(208, 'đã tồn tại', checkSoTaiKhoan)
        } else {
        const luuThongTin = await prisma.liXi.create({
          data: body
        })
        if(luuThongTin) {
          return this.extraService.response(200, 'đã lưu', luuThongTin)
        } else {
          return this.extraService.response(500, 'lỗi', [])
        }
      }
      }
      
    } catch (error) {
      this.extraService.response(500, 'lỗi rồi ku', error)
    }
  }

  async capNhatTienLiXi (body: CapNhatTienLiXiDto) {
    try {
      const {lxId, liXi, ghiChu} = body
      const update = await prisma.liXi.updateMany({
        where: {
          lxId
        },
        data: {
          liXi,
          ghiChu
        }
      })
      if(update.count > 0) {
        return this.extraService.response(200, 'đã cập nhật', body)
      } else {
        return this.extraService.response(500, 'lỗi', [])
      }
      
    } catch (error) {
      this.extraService.response(500, 'lỗi', error)
      
    }
  }

  async listNguoiThamGia () {
    try {
      const list = await prisma.liXi.findMany({
        where: {
          liXi: {
            gt: 0
          }
        },
        orderBy: {
          lxId: 'desc'
        }
      })
      return this.extraService.response(200, 'list', list)
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
}
