import { Injectable } from '@nestjs/common';
import { CreatePhieuDto, LuuPhieuDto, SortPhieuDto, SuaChiTietDto, TraNoMotPhieuDto } from './dto/create-phieu.dto';
import { UpdatePhieuDto } from './dto/update-phieu.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

@Injectable()
export class PhieuService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  create(createPhieuDto: CreatePhieuDto) {
    return 'This action adds a new phieu';
  }

  async findAllSanPham(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const sanPham = await prisma.sanPham.findMany({
        where: {
          sId, 
          sta: true
        }
      })
      if(sanPham.length > 0) {
        const res = sanPham.map((item) => {
          const {giaNhap, giaBan, giaGiam, phiVc, soLuong, maxOrder} = item
          return {
            ...item,
            giaNhap: Number(giaNhap),
            giaBan: Number(giaBan),
            giaGiam: Number(giaGiam),
            phiVc: Number(phiVc),
            soLuong: Number(soLuong),
            maxOrder: Number(maxOrder)
          }

        })
        return this.extraService.response(200, 'list sản phẩm', res)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async search(token: string, keyword: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const search = await prisma.sanPham.findMany({
        where: {
          sId,
          sta: true,
          OR: [
            {
              maSp: {
                contains: keyword
              }
            },
            {
              tenSp: {
                contains: keyword
              }
            }
          ]
        }
      })
      if(search.length > 0) {
        const res = search.map((item) => {
          const {giaNhap, giaBan, giaGiam, phiVc, maxOrder, soLuong} = item
          return {
            ...item,
            giaNhap: Number(giaNhap),
            giaBan: Number(giaBan),
            giaGiam: Number(giaGiam),
            phiVc: Number(phiVc),
            maxOrder: Number(maxOrder),
            soLuong: Number(soLuong)
          }
        })
        return this.extraService.response(200, 'kết quả tìm kiếm', res)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async taoPhieu(token: string, body: CreatePhieuDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {dtId, loaiPhieu} = body
      const thongTinDoiTac = await prisma.doiTac.findFirst({
        where: {
          dtId,
          sId,
          sta: true
        }
      })
      const {maDoiTac} = thongTinDoiTac
      //đếm số phiếu
      const count = await prisma.phieu.count({
        where : {
          sId,
          loaiPhieu
        }
      })

      const soPhieu = loaiPhieu+(count+1)
      const data = {
        ...body,
        maDoiTac,
        soPhieu,
        sId
      }
      const taoPhieu = await prisma.phieu.create({
        data
      })
      if(taoPhieu) {
        return this.extraService.response(200, 'đã tạo phiếu', taoPhieu.pId)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async getPhieuNhapMoiTao(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const phieuNhapMoiTao = await prisma.phieu.findMany({
        where: {
          trangThai: 'moiTao',
          sId,
          sta: true,
          
        },
        include: {
          bangChiTiet: {
            where: {
              sta: true
            }
          },
          doiTac: true
        },
        orderBy: {
          pId: 'desc'
        }
      })
      if(phieuNhapMoiTao.length > 0) {
        const res = phieuNhapMoiTao.map((item) => {
          const {soTien, thanhToan, bangChiTiet} = item
          const chiTietMapped = bangChiTiet.map((item) => {
            const {quyDoi, soLuong, donGia} = item
            return {
              ...item,
              quyDoi: Number(quyDoi),
              soLuong: Number(soLuong),
              donGia: Number(donGia),
              thanhTien: Number(soLuong) * Number(donGia)
            }
          })
          return {
            ...item,
            bangChiTiet: chiTietMapped,
            soTien: Number(soTien),
            thanhToan: Number(thanhToan),
            conNo: Number(soTien) - Number(thanhToan)
          }
        })
        console.log(res)
        return this.extraService.response(200,'phiếu nhập mới tạo', res)
      } else {
        return this.extraService.response(404, 'not found', [])
      }

      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async suaChiTiet(token: string, body: SuaChiTietDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {dId} = body
      const data = {
        ...body,
      }
      const update = await prisma.bangChiTiet.updateMany({
        where: {
          dId,
          sId,
          sta: true,
        },
        data
      })
      if(update.count > 0) {
        return this.extraService.response(200, 'đã cập nhật', body)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} phieu`;
  }

  update(id: number, updatePhieuDto: UpdatePhieuDto) {
    return `This action updates a #${id} phieu`;
  }

  async xoaPhieuMoiTao(token: string, pId: number) {
    try {
      const sId = await this.extraService.getSId(token)
      const xoaChiTiet = await prisma.bangChiTiet.updateMany({
        where: {
          pId,
          sId,
          sta: true,
        },
        data: {
          sta: false
        }
      })
      const xoaPhieu = await prisma.phieu.updateMany({
        where: {
          pId,
          sId,
          sta: true,
        },
        data: {
          sta: false
        }
      })
      if(xoaPhieu.count > 0) {
        return this.extraService.response(200, 'đã xoá phiếu', pId)
      } 
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async luuPhieuMoiTao(token: string, body: LuuPhieuDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {pId} = body
      const thongTinChiTiet = await prisma.bangChiTiet.findMany({
        where: {
          pId,
          sId,
          sta:true
        }
      })
      
      thongTinChiTiet.forEach(async (item) => {
        const {spId, kId, soLuong, quyDoi} = item
        const qty = Number(soLuong) * Number(quyDoi)
        //cộng kho
        const congKho = await prisma.sanPham.updateMany({
          where: {
            kId,
            sId,
            sta: true
          },
          data: {
            soLuong: {
              increment: qty
            }
          }
        })
      })
      const data = {
        ...body,
        trangThai: 'luu'
      }
      const luuPhieu = await prisma.phieu.updateMany({
        where: {
          pId,
          sId,
          trangThai: 'moiTao',
          sta:true
        },
        data
      })
      if(luuPhieu.count > 0 ) {
        return this.extraService.response(200, 'đã lưu phiếu', pId)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

  async traNoMotPhieu(token: string, body:TraNoMotPhieuDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {pId, thanhToan} = body
      const phieu = await prisma.phieu.findFirst({
        where: {
          pId,
          sId,
          sta: true
        },
      })
      // console.log("phiếu ", Number(phieu.thanhToan))
      const capNhat = await prisma.phieu.updateMany({
        where: {
          pId,
          sId,
          sta: true,
        },
        data: {
          thanhToan: thanhToan + Number(phieu.thanhToan)
        }
      })
      if(capNhat.count > 0) {
        return this.extraService.response(200, 'đã trả nợ', pId)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
      console.log(body)
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }


  async sortPhieu(token: string, body: SortPhieuDto) {
    try {
      const sId = await this.extraService.getSId(token)
      // console.log(body)

      let whereCondition: any = {
          sId,
          loaiPhieu: 'pn',
          trangThai: 'luu',
          sta: true,
      }

      if(body.dtId) {
        whereCondition.dtId = body.dtId
      }

      if (body.from) {
        if (body.to) {
          // If both from and to are present, construct ngay as an object
          whereCondition.ngay = {
            gte: `${body.from}T00:00:00.000Z`, // Assuming body.from is a valid date string
            lte: `${body.to}T00:00:00.000Z`,   // Assuming body.to is a valid date string
          };
        } else {
          // If only from is present, set ngay directly
          whereCondition.ngay = `${body.from}T00:00:00.000Z`
        }
      }

      if(body.to) {
        if (body.from) {
          // If both from and to are present, construct ngay as an object
          whereCondition.ngay = {
            gte: `${body.from}T00:00:00.000Z`, // Assuming body.from is a valid date string
            lte: `${body.to}T00:00:00.000Z`,   // Assuming body.to is a valid date string
          };
        } else {
          // If only from is present, set ngay directly
          whereCondition.ngay = `${body.to}T00:00:00.000Z`
        }
      }

      

      const chiTietNhap = await prisma.phieu.findMany({
        // where: {
        //   sId,
        //   loaiPhieu: 'pn',
        //   trangThai: 'luu',
        //   sta: true,
        // },
        where: whereCondition,
        include: {
          bangChiTiet: true,
          doiTac: true,
        },
        orderBy:{
          pId: 'desc'
        }
      });
      if (chiTietNhap.length > 0) {
        if(body.locNo) {
          const res = chiTietNhap.forEach((item) => {
            const { soTien, thanhToan, soPhieu, bangChiTiet, doiTac } = item;
            const conNo = Number(soTien) - Number(thanhToan);
            if(conNo > 0) {
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
          }
          });

          // console.log(res)

          if(res !== undefined) {
        return this.extraService.response(200, 'chi tiết nhập', res);

          } else {
        return this.extraService.response(404, 'not found', []);

          }

        } else {

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
      } else {
        return this.extraService.response(404, 'not found', [])
      }

      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
}
