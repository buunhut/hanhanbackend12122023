import { async } from 'rxjs';
import { Injectable } from '@nestjs/common';
import {
  CreateShopDto,
  ShopLoginDto,
  TaoCauHinhDto,
} from './dto/create-shop.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

@Injectable()
export class ShopsService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async create(body: CreateShopDto) {
    try {
      const { taiKhoan, matKhau } = body;
      const check = await prisma.shops.findFirst({
        where: {
          taiKhoan,
          sta: true,
        },
      });
      if (check) {
        return this.extraService.response(209, 'tài khoản đã đăng ký', check);
      } else {
        const maHoaMatKhau = await bcrypt.hash(matKhau, 12);
        const data = {
          ...body,
          matKhau: maHoaMatKhau,
        };
        const create = await prisma.shops.create({
          data,
        });
        if (create) {
          return this.extraService.response(200, 'done', create);
        } else {
          return this.extraService.response(500, 'lỗi', null);
        }
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async login(body: ShopLoginDto) {
    try {
      const { taiKhoan, matKhau } = body;
      const check = await prisma.shops.findFirst({
        where: {
          taiKhoan,
          sta: true,
        },
      });
      if (check) {
        //check mật khẩu mã hoá
        const checkMatKhau = await bcrypt.compare(matKhau, check.matKhau);
        if (checkMatKhau) {
          const token = await this.extraService.signToken(check);
          const res = {
            ...check,
            token,
          };
          return this.extraService.response(200, 'đăng nhập thành công', res);
        } else {
          return this.extraService.response(404, 'mật khẩu không đúng', null);
        }
      } else {
        return this.extraService.response(
          404,
          'số điện thoại không đúng',
          null,
        );
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async taoCauHinh(token: string, body: TaoCauHinhDto) {
    try {
      const sId = await this.extraService.getSId(token);
      const count = await prisma.cauHinh.count({
        where: {
          sId,
          sta: true,
        },
      });
      const data = {
        ...body,
        sId,
        mucHoan: Number(body.mucHoan),
      };
      // console.log(data)
      if (count === 0) {
        const taoCauHinh = await prisma.cauHinh.create({
          data,
        });
      } else {
        const updateCauHinh = await prisma.cauHinh.updateMany({
          where: {
            sId,
            sta: true,
          },
          data,
        });
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async getCauHinh(sId: number) {
    try {
      // const sId = await this.extraService.getSId(token);
      const cauHinh = await prisma.cauHinh.findFirst({
        where: {
          sId,
          sta: true,
        },
      });
      if (cauHinh) {
        // console.log(cauHinh)
        return this.extraService.response(200, 'cấu hình', cauHinh);
      } else {
        return this.extraService.response(404, 'not found', {
          mienPhiVc: 0,
          phiVc: 0,
          hoanTien: 0,
          mucHoan: 0,
          tatShop: false
        });
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error);
    }
  }

  async tatMoShop(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const trangThai = await prisma.cauHinh.findFirst({
        where: {
          sId,
          sta: true,
        },
        select: {
          tatShop: true
        }
      })
      const tatMoShop = await prisma.cauHinh.updateMany({
        where: {
          sId, 
          sta: true
        },
        data: {
          tatShop: !trangThai.tatShop
        }
      })
      if(tatMoShop.count > 0) {
        return this.extraService.response(200, 'done', !trangThai.tatShop)
      } else {
        return this.extraService.response(404, 'lỗi', null)
      }
    } catch (error) {
      this.extraService.response(500, 'lỗi', error)
      
    }
  }
}
