import { SanPham } from './entities/san-pham.entity';
import { Injectable } from '@nestjs/common';
import {
  CreateSanPhamDto,
  UpdateDanhMucSanPhamDto,
  UpdateDvtDto,
  UpdateGiaBanDto,
  UpdateGiaGiamDto,
  UpdateGiaNhapDto,
  UpdateMaSpDto,
  UpdateMaxOrderDto,
  UpdatePhiVcDto,
  UpdateQuyDoiDto,
  UpdateTenSpDto,
  UpdateThuongHieuSanPhamDto,
} from './dto/create-san-pham.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

@Injectable()
export class SanPhamService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async create(token: string, body: CreateSanPhamDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const count = await prisma.sanPham.count({
        where: {
          sId,
        },
      });
      //tạo mã sản phẩm tự động
      let maTuDong = count + 1;
      maTuDong = Math.max(0, Math.floor(maTuDong));

      // Determine the number of digits needed for the count
      const digits = Math.max(6 - Math.floor(Math.log10(maTuDong)), 0);

      // Create the formatted maSp
      let maSp = `MTD${'0'.repeat(digits)}${maTuDong}`;
      let kId = count + 1;
      const data = {
        ...body,
        kId,
        maSp,
        sId,
      };
      // console.log(data)
      const create = await prisma.sanPham.createMany({
        data,
      });
      if (create) {
        return this.extraService.response(200, 'đã tạo sản phẩm', kId);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async createDvt(token: string, kId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      //đếm số lượng sản phẩm
      const count = await prisma.sanPham.count({
        where: {
          sId,
        },
      });
      //tạo mã sản phẩm tự động
      let maTuDong = count + 1;
      maTuDong = Math.max(0, Math.floor(maTuDong));

      // Determine the number of digits needed for the count
      const digits = Math.max(6 - Math.floor(Math.log10(maTuDong)), 0);

      // Create the formatted maSp
      let maSp = `MTD${'0'.repeat(digits)}${maTuDong}`;

      //check kId
      const khoId = await prisma.sanPham.findFirst({
        where: {
          kId,
          sId,
        },
      });
      const soLuong = Number(khoId.soLuong);
      const thId = khoId.thId;
      const data = {
        maSp,
        kId,
        soLuong,
        thId,
        sId,
      };
      const taoDvt = await prisma.sanPham.createMany({
        data,
      });

      if(taoDvt.count > 0) {
        return this.extraService.response(200, 'đã tạo dvt', maSp)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }

      // // const check = await prisma.sanPham.findFirst({
      // //   where: {
      // //     kId,
      // //     sId,
      // //     sta: true,
      // //   }
      // // })
      // // let dmId = null
      // // let thId = null

      // // if(check) {
      // //   dmId = check.dmId
      // //   thId = check.thId
      // // }

      // // const createDvt = await prisma.sanPham.create({
      // //   data: {
      // //     sId,
      // //     kId,
      // //     maSp,
      // //     dmId,
      // //     thId
      // //   },
      // // });
      // // if (createDvt) {
      // //   const res = {
      // //     ...createDvt,
      // //     giaNhap: Number(createDvt.giaNhap),
      // //     giaBan: Number(createDvt.giaBan),
      // //     giaGiam: Number(createDvt.giaGiam),
      // //     phiVc: Number(createDvt.phiVc),
      // //   };
      //   return this.extraService.response(200, 'đã đã tạo đơn vị tính', res);
      // } else {
      //   return this.extraService.response(500, 'lỗi', null);
      // }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  async readSanPham(token: string) {
    try {
      const sId = await this.extraService.getSId(token);
      const listSanPham = await prisma.danhMuc.findMany({
        where: {
          sId,
          sta: true,
        },
        select: {
          dmId: true,
          tenDanhMuc: true,
          hinhAnh: true,
          thuongHieu: {
            where: {
              sId,
              sta: true,
            },
            select: {
              thId: true,
              tenThuongHieu: true,
              hinhAnh: true,
              sanPham: {
                where: {
                  sId,
                  sta: true,
                },
                select: {
                  kId: true,
                  soLuong: true,
                  spId: true,
                  maSp: true,
                  tenSp: true,
                  giaNhap: true,
                  giaBan: true,
                  giaGiam: true,
                  phiVc: true,
                  maxOrder: true,
                  dvt: true,
                  quyDoi: true,
                  hinhAnh: true,
                  sho: true,
                  sId: true,
                },
              },
            },
          },
        },
      });
      if (listSanPham.length > 0) {
        const res = listSanPham.map((listSanPhamItem) => {
          const { thuongHieu } = listSanPhamItem;
          const transformedSanPham = thuongHieu.map((thuongHieuItem) => {
            const { sanPham } = thuongHieuItem;
            const transformedSanPhamItem = sanPham.map((item) => ({
              ...item,
              giaNhap: Number(item.giaNhap),
              giaBan: Number(item.giaBan),
              giaGiam: Number(item.giaGiam),
              phiVc: Number(item.phiVc),
              quyDoi: Number(item.quyDoi),
              soLuong: Number(item.soLuong),
            }));
            return {
              ...thuongHieuItem,
              sanPham: transformedSanPhamItem,
            };
          });
          return {
            ...listSanPhamItem,
            thuongHieu: transformedSanPham,
          };
        });
        return this.extraService.response(200, 'list sản phẩm', res);
      } else {
        return this.extraService.response(404, 'not found', []);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  // //cập nhật danhMuc
  // async updateDanhMuc(token: string, body: UpdateDanhMucSanPhamDto) {
  //   const sId = await this.extraService.getSId(token);
  //   const { spId, dmId } = body;
  //   const check = await prisma.sanPham.findFirst({
  //     where: {
  //       spId,
  //       sId,
  //       sta: true,
  //     },
  //   });
  //   if (check) {
  //     const { kId } = check;
  //     const update = await prisma.sanPham.updateMany({
  //       where: {
  //         kId,
  //         sId,
  //         sta: true,
  //       },
  //       data: {
  //         dmId,
  //       },
  //     });
  //     if (update.count > 0) {
  //       return this.extraService.response(200, 'đã cập nhật', dmId);
  //     } else {
  //       return this.extraService.response(500, 'lỗi', null);
  //     }
  //   } else {
  //     return this.extraService.response(404, 'not found', spId);
  //   }
  // }
  // //cập nhật thuongHieu
  // async updateThuongHieu(token: string, body: UpdateThuongHieuSanPhamDto) {
  //   const sId = await this.extraService.getSId(token);
  //   const { spId, thId } = body;
  //   const check = await prisma.sanPham.findFirst({
  //     where: {
  //       spId,
  //       sId,
  //       sta: true,
  //     },
  //   });
  //   if (check) {
  //     const { kId } = check;
  //     const update = await prisma.sanPham.updateMany({
  //       where: {
  //         kId,
  //         sId,
  //         sta: true,
  //       },
  //       data: {
  //         thId,
  //       },
  //     });
  //     if (update.count > 0) {
  //       return this.extraService.response(200, 'đã cập nhật', thId);
  //     } else {
  //       return this.extraService.response(500, 'lỗi', null);
  //     }
  //   } else {
  //     return this.extraService.response(404, 'not found', spId);
  //   }
  // }
  //cập nhật maSp
  async updateMaSp(token: string, body: UpdateMaSpDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, maSp } = body;
      const check = await prisma.sanPham.findFirst({
        where: {
          maSp,
          sId,
          sta: true,
          NOT: {
            spId,
          },
        },
      });
      if (check) {
        return this.extraService.response(208, 'trùng mã sản phẩm', maSp);
      } else {
        const update = await prisma.sanPham.updateMany({
          where: {
            spId,
            sId,
            sta: true,
          },
          data: {
            maSp,
          },
        });
        if (update.count > 0) {
          return this.extraService.response(200, 'đã cập nhật', maSp);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật tenSp
  async updateTenSp(token: string, body: UpdateTenSpDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, tenSp } = body;
      const check = await prisma.sanPham.findFirst({
        where: {
          tenSp,
          sId,
          sta: true,
          NOT: {
            spId,
          },
        },
      });
      if (check) {
        return this.extraService.response(209, 'trùng tên sản phẩm', tenSp);
      } else {
        const update = await prisma.sanPham.updateMany({
          where: {
            spId,
            sId,
            sta: true,
          },
          data: {
            tenSp,
          },
        });
        if (update.count > 0) {
          return this.extraService.response(200, 'đã cập nhật', tenSp);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật dvt
  async updateDvt(token: string, body: UpdateDvtDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, dvt } = body;
      const check = await prisma.sanPham.findFirst({
        where: {
          spId,
          sId,
          sta: true,
        },
      });
      if (check) {
        const { kId } = check;
        console.log(kId);
        const checkDvt = await prisma.sanPham.findFirst({
          where: {
            dvt,
            kId,
            sId,
            sta: true,
            NOT: {
              spId,
            },
          },
        });
        if (checkDvt) {
          return this.extraService.response(209, 'trùng dvt', dvt);
        } else {
          const update = await prisma.sanPham.updateMany({
            where: {
              spId,
              sId,
              sta: true,
            },
            data: {
              dvt,
            },
          });
          if (update.count > 0) {
            return this.extraService.response(200, 'đã cập nhật', dvt);
          } else {
            return this.extraService.response(500, 'lỗi', null);
          }
        }
      } else {
        return this.extraService.response(404, 'not found', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật giaNhap
  async updateGiaNhap(token: string, body: UpdateGiaNhapDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, giaNhap } = body;
      const update = await prisma.sanPham.updateMany({
        where: {
          spId,
          sId,
          sta: true,
        },
        data: {
          giaNhap,
        },
      });
      if (update) {
        return this.extraService.response(200, 'đã cập nhật', giaNhap);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật giaBan
  async updateGiaBan(token: string, body: UpdateGiaBanDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, giaBan } = body;
      const update = await prisma.sanPham.updateMany({
        where: {
          spId,
          sId,
          sta: true,
        },
        data: {
          giaBan,
        },
      });
      if (update) {
        return this.extraService.response(200, 'đã cập nhật', giaBan);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật giaGiam
  async updateGiaGiam(token: string, body: UpdateGiaGiamDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, giaGiam } = body;
      const update = await prisma.sanPham.updateMany({
        where: {
          spId,
          sId,
          sta: true,
        },
        data: {
          giaGiam,
        },
      });
      if (update) {
        return this.extraService.response(200, 'đã cập nhật', giaGiam);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật phiVc
  async updatePhiVc(token: string, body: UpdatePhiVcDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, phiVc } = body;
      const update = await prisma.sanPham.updateMany({
        where: {
          spId,
          sId,
          sta: true,
        },
        data: {
          phiVc,
        },
      });
      if (update) {
        return this.extraService.response(200, 'đã cập nhật', phiVc);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //cập nhật quyDoi
  async updateQuyDoi(token: string, body: UpdateQuyDoiDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const { spId, quyDoi } = body;
      const update = await prisma.sanPham.updateMany({
        where: {
          spId,
          sId,
          sta: true,
        },
        data: {
          quyDoi,
        },
      });
      if (update) {
        return this.extraService.response(200, 'đã cập nhật', quyDoi);
      } else {
        return this.extraService.response(500, 'lỗi', null);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  // //cập nhật maxOrder
  async updateMaxOrder(token: string, body: UpdateMaxOrderDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {spId, maxOrder} = body
      const update = await prisma.sanPham.updateMany({
        where: {
          spId,
          sId,
          sta: true,
        },
        data: {
          maxOrder
        }
      })
      if(update) {
        return this.extraService.response(200, 'đã cập nhật', maxOrder)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  //cập nhật sho
  async updateSho(token: string, spId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      const check = await prisma.sanPham.findFirst({
        where: {
          spId,
          sId,
          sta: true,
        },
      });
      if (check) {
        const update = await prisma.sanPham.updateMany({
          where: {
            spId,
            sId,
            sta: true,
          },
          data: {
            sho: !check.sho,
          },
        });
        if (update.count > 0) {
          return this.extraService.response(200, 'đã cập nhật', spId);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      } else {
        return this.extraService.response(404, 'not found', spId);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
  //xoá sản phẩm
  async delete(token: string, spId: number) {
    try {
      const sId = await this.extraService.getSId(token);
      const check = await prisma.sanPham.findFirst({
        where: {
          spId,
          sId,
          sta: true,
        },
      });
      if (check) {
        const xoa = await prisma.sanPham.updateMany({
          where: {
            spId,
            sId,
            sta: true,
          },
          data: {
            hinhAnh: null,
            sta: false,
          },
        });
        if (xoa.count > 0) {
          const { hinhAnh } = check;
          if (hinhAnh !== null) {
            // Xây dựng đường dẫn đầy đủ đến tệp hình ảnh trong thư mục public/img
            const imagePath = process.cwd() + '/public/img/' + hinhAnh;

            // Kiểm tra xem tệp hình ảnh tồn tại
            if (fs.existsSync(imagePath)) {
              // Xóa tệp hình ảnh
              fs.unlinkSync(imagePath);
            }
          }
          return this.extraService.response(200, 'đã xoá sản phẩm', spId);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      } else {
        return this.extraService.response(404, 'not found', spId);
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }
}
