import { Injectable } from '@nestjs/common';
import {
  CreateDonHangDto,
  SortDto,
  UpdateNguoiGiaoDto,
  UpdateThanhToanDto,
} from './dto/create-don-hang.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';
// import * as moment from 'moment';

import * as moment from 'moment-timezone';

const prisma = new PrismaClient();

@Injectable()
export class DonHangService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async create(token: string, body: CreateDonHangDto) {
    try {
      const { donHang, chiTietDonHang } = body;
      let hetHang = [];
      chiTietDonHang.forEach(async (item) => {
        const sanPham = await prisma.sanPham.findFirst({
          where: {
            spId: item.spId,
            sta: true,
          },
        });
        const tonKho = Number(sanPham.soLuong);
        if (tonKho < item.soLuong * item.quyDoi) {
          hetHang.push(item.spId);
        }
      });
      if (hetHang.length > 0) {
        return this.extraService.response(500, 'không đủ hàng', hetHang);
      } else {
        const count = await prisma.donHang.count({
          where: {
            sId: donHang.sId,
          },
        });

        //tạo số đơn hàng tự động
        let dem = count + 1;
        dem = Math.max(0, Math.floor(dem));

        // Determine the number of digits needed for the count
        const digits = Math.max(6 - Math.floor(Math.log10(dem)), 0);

        // Create the formatted maSp
        let soDonHang = `DH${'0'.repeat(digits)}${dem}`;

        // console.log("lưu ", donHang)
        const ngay = moment().utc().toDate();
        const { sId, uId, tienHang, traVi, phiVc, ghiChu, trangThai } = donHang;
        const data = {
          sId,
          uId,
          tienHang,
          traVi,
          phiVc,
          ghiChu,
          ngay,
          trangThai,
          soDonHang,
        };
        const luuDonHang = await prisma.donHang.create({
          data,
        });
        const { oId } = luuDonHang;

        //lưu chi tiết đơn hàng, trừ kho
        chiTietDonHang.map(async (item) => {
          const { spId, kId, soLuong, quyDoi } = item;
          const truKho = soLuong * quyDoi;
          await prisma.sanPham.updateMany({
            where: {
              kId,
              sta: true,
            },
            data: {
              soLuong: {
                decrement: truKho,
              },
            },
          });
          await prisma.chiTietDonHang.create({
            data: {
              ...item,
              oId,
            },
          });
        });

        //lưu tích luỹ
        // console.log(traVi)


          await prisma.diemTichLuy.create({
            data: {
              diemTichLuy: donHang.diemTichLuy,
              truTichLuy: traVi,
              oId,
              uId,
              sId,
              sta: false,
            },
          });
  
        return this.extraService.response(200, 'đặt hàng thành công', oId);
      }
    } catch (error) {}
  }

  async chiTietDonHangByUser(token: string, uId: number) {
    try {
      const listDonHang = await prisma.donHang.findMany({
        where: {
          uId,
          sta: true,
        },
        orderBy: {
          oId: 'desc',
        },
        include: {
          chiTietDonHang: true,
          diemTichLuy: {
            select: {
              diemTichLuy: true,
              truTichLuy: true,
              sta: true,
            },
          },
        },
      });
      // console.log(listDonHang)
      if (listDonHang.length > 0) {
        let diemTL = {};

        const res = listDonHang.map((item) => {
          const { chiTietDonHang, diemTichLuy } = item;

          diemTL = {
            diemTichLuy: Number(diemTichLuy[0]?.diemTichLuy),
            truTichLuy: Number(diemTichLuy[0]?.truTichLuy),
            sta: diemTichLuy[0].sta,
          };

          const chiTietDonHangMapped = chiTietDonHang.map((item) => {
            return {
              soLong: Number(item.soLuong),
              donGia: Number(item.donGia),
              quyDoi: Number(item.quyDoi),
            };
          });

          return {
            ...item,
            tienHang: Number(item.tienHang),
            phiVc: Number(item.phiVc),
            thanhToan: Number(item.thanhToan),
            traVi: Number(item.traVi),
            chiTietDonHang: chiTietDonHangMapped,
            diemTichLuy: diemTL,
          };
        });
        // console.log(res)
        return this.extraService.response(200, '', res);
      } else {
        return this.extraService.response(400, 'not found', []);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async huyDonHang(token: string, oId: number) {
    try {
      const chiTietDonHang = await prisma.chiTietDonHang.findMany({
        where: {
          oId,
          sta: true,
        },
      });
      if (chiTietDonHang.length > 0) {
        //cộng kho,
        chiTietDonHang.map(async (item) => {
          const { soLuong, quyDoi, kId } = item;
          const congKho = Number(soLuong) * Number(quyDoi);
          await prisma.sanPham.updateMany({
            where: {
              kId,
            },
            data: {
              soLuong: {
                increment: congKho,
              },
            },
          });
        });
      }

      //xoá điểm tích luỹ
      await prisma.diemTichLuy.updateMany({
        where: {
          oId,
        },
        data: {
          diemTichLuy: 0,
          truTichLuy: 0,
          sta: false
        }
      })
      await prisma.chiTietDonHang.updateMany({
        where: {
          oId,
        },
        data: {
          sta: false
        }
      })
      //huỷ đơn
      const huyDon = await prisma.donHang.updateMany({
        where: {
          oId,
          sta: true,
        },
        data: {
          trangThai: 'đã huỷ',
          sta: false,
        },
      });
      if (huyDon.count > 0) {
        return this.extraService.response(200, 'đã huỷ đơn hàng', oId);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async chiTietDonHangByShop(token: string) {
    try {
      const sId = await this.extraService.getSId(token);
      const listDonHangByShop = await prisma.donHang.findMany({
        where: {
          sId,
          sta: true,
        },
        orderBy: {
          oId: 'desc',
        },
        include: {
          users: true,
          chiTietDonHang: true,
        },
      });

      if (listDonHangByShop.length > 0) {
        const res = listDonHangByShop.map((item) => {
          const { tienHang, phiVc, thanhToan, chiTietDonHang, traVi } = item;
          const chiTietDonHangMapped = chiTietDonHang.map((item) => {
            const { quyDoi, soLuong, donGia } = item;
            return {
              ...item,
              soLuong: Number(soLuong),
              quyDoi: Number(quyDoi),
              donGia: Number(donGia),
            };
          });

          return {
            ...item,
            tienHang: Number(tienHang),
            phiVc: Number(phiVc),
            thanhToan: Number(thanhToan),
            traVi: Number(traVi),
            chiTietDonHang: chiTietDonHangMapped,
          };
        });
        // console.log(res)
        return this.extraService.response(200, 'list đơn hàng by shop', res);
      }

      // console.log(listDonHangByShop);
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async inDonHangByShop(token: string, oId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      const donHangByShop = await prisma.donHang.findMany({
        where: {
          oId,
          sId,
          sta: true,
        },
        orderBy: {
          oId: 'desc',
        },
        include: {
          users: true,
          chiTietDonHang: true,
        },
      });
      // console.log(listDonHangByShop)
      const { tienHang, phiVc, traVi, thanhToan, users, chiTietDonHang } =
        donHangByShop[0];

      const chiTietDonHangMapped = chiTietDonHang.map((item) => {
        const { quyDoi, soLuong, donGia } = item;
        return {
          ...item,
          soLuong: Number(soLuong),
          quyDoi: Number(quyDoi),
          donGia: Number(donGia),
        };
      });
      const res = {
        ...donHangByShop[0],
        tienHang: Number(tienHang),
        phiVc: Number(phiVc),
        traVi: Number(traVi),
        thanhToan: Number(thanhToan),
        chiTietDonHang: chiTietDonHangMapped,
      };
      return this.extraService.response(200, 'list đơn hàng by shop', res);
      // console.log(listDonHangByShop)
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async capNhatNguoiGiao(token: string, body: UpdateNguoiGiaoDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { oId, nguoiGiao } = body;
      const capNhatNguoiGiao = await prisma.donHang.updateMany({
        where: {
          sId,
          oId,
          sta: true,
        },
        data: {
          nguoiGiao,
          trangThai: 'đang giao',
        },
      });
      if (capNhatNguoiGiao.count > 0) {
        return this.extraService.response(
          200,
          'đã cập nhật người giao',
          nguoiGiao,
        );
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async capNhatThanhToan(token: string, body: UpdateThanhToanDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { oId, thanhToan } = body;
      const capNhatThanhToan = await prisma.donHang.updateMany({
        where: {
          oId,
          sId,
          sta: true,
        },
        data: {
          thanhToan,
          trangThai: 'đã giao',
        },
      });
      const capNhatDiemTichLy = await prisma.diemTichLuy.updateMany({
        where: {
          oId,
          sId,
          // sta: false
        },
        data: {
          sta: true,
        },
      });
      if (capNhatDiemTichLy.count > 0 && capNhatThanhToan.count > 0) {
        return this.extraService.response(200, 'đã cập nhật thanh toán', oId);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  //sort đơn hàng
  async sortDonHang(token: string, body: SortDto) {
    try {
      const { keyword, from, to, nguoiGiao, trangThai } = body;
      const sId = await this.extraService.getSId(token);
  
      const whereCondition: any = {
        sId,
        sta: true,
      };
  
      if (trangThai) {
        whereCondition.trangThai = trangThai;
      }

      if (nguoiGiao) {
        whereCondition.nguoiGiao = nguoiGiao;
      }
  
      if (keyword) {
        whereCondition.OR = [
          {
            soDonHang: {
              contains: keyword,
            },
          },      
          {
            trangThai: {
              contains: keyword,
            },
          },      
          {
            ghiChu: {
              contains: keyword,
            },
          },      
          {
            users: {
              OR: [
                {
                  hoTen: {
                    contains: keyword,
                  }
                },
                {
                  diaChi: {
                    contains: keyword,
                  }
                },
                {
                  soDt: {
                    contains: keyword,
                  }
                },

              ]
              
              
            }
            
          },      
          // Add more conditions if needed
        ];
      }
  
      if (from) {
        let end = new Date(from)
        end.setHours(23, 59, 59, 999)
        whereCondition.ngay = {
          ...(whereCondition.ngay || {}),
          gte: from,
          lte: end
        };
      }
  
      if (to) {
        let end = new Date(to)
        end.setHours(23, 59, 59, 999)
        whereCondition.ngay = {
          ...(whereCondition.ngay || {}),
          gte: from ? from : to,
          lte: end
        };
      }

  
      const listDonHangByShop = await prisma.donHang.findMany({
        where: whereCondition,
        orderBy: {
          oId: 'desc',
        },
        include: {
          users: true,
          chiTietDonHang: true,
        },
      });
  
      if (listDonHangByShop.length > 0) {
        const res = listDonHangByShop.map((item) => {
          const { tienHang, phiVc, thanhToan, chiTietDonHang, traVi } = item;
          const chiTietDonHangMapped = chiTietDonHang.map((item) => {
            const { quyDoi, soLuong, donGia } = item;
            return {
              ...item,
              soLuong: Number(soLuong),
              quyDoi: Number(quyDoi),
              donGia: Number(donGia),
            };
          });
  
          return {
            ...item,
            tienHang: Number(tienHang),
            phiVc: Number(phiVc),
            thanhToan: Number(thanhToan),
            traVi: Number(traVi),
            chiTietDonHang: chiTietDonHangMapped,
          };
        });
  
        // console.log(res);
        return this.extraService.response(200, 'list đơn hàng by shop', res);
      } else {
        return this.extraService.response(404, 'not found', [])
      }
  
      // console.log(listDonHangByShop);
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  
  async getListTrangThai(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const listTrangThai = await prisma.donHang.findMany({
        where: {
          sId,
          sta: true
        },
        select: {
          trangThai: true
        },
        orderBy: {
          trangThai: 'asc'
        }
      });
  
      const uniqueTrangThai = Array.from(new Set(listTrangThai.map(item => item.trangThai)));
  
      return this.extraService.response(200, 'list trạng thái', uniqueTrangThai);
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  //ví
  async getVi(token: string) {
    try {
      const uId = await this.extraService.getUId(token)
      const diemTichLuy = await prisma.diemTichLuy.findMany({
        where: {
          uId,
          // sta: true,
        },
        select: {
          diemTichLuy: true,
          truTichLuy: true,
          sta: true
        }
      })
      if(diemTichLuy.length > 0) {
        const tongDiemTichLuy = diemTichLuy.reduce((total, item) => {
          if (item.sta === true) {
              return total + Number(item.diemTichLuy);
          } else {
              return total;
          }
      }, 0);
        const tongTruTichLuy = diemTichLuy.reduce((total, item) => total + Number(item.truTichLuy), 0)
        
        const res = tongDiemTichLuy - tongTruTichLuy
        return this.extraService.response(200, 'tổng điềm tích luỹ', res)

      } else {
        return this.extraService.response(404, 'tổng điềm tích luỹ', 0)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }


  // findAll() {
  //   return `This action returns all donHang`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} donHang`;
  // }

  // update(id: number, updateDonHangDto: UpdateDonHangDto) {
  //   return `This action updates a #${id} donHang`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} donHang`;
  // }
}
