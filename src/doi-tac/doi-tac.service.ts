import { Injectable } from '@nestjs/common';
import { CreateDoiTacDto, UpdateDoiTacDto } from './dto/create-doi-tac.dto';
import { ExtraService } from 'src/service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class DoiTacService {
  //kết thừa extraService để dùng
  constructor(private readonly extraService: ExtraService) {}

  async create(token: string, body: CreateDoiTacDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const data = {
        ...body,
        sId
      }
      const create = await prisma.doiTac.createMany({
        data
      })
      if(create.count > 0) {
        return this.extraService.response(200, 'đã tạo đối tác', data)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async findNpp(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const npp = await prisma.doiTac.findMany({
        where: {
          loaiDt: 'npp',
          sId,
          sta: true,
        },
        orderBy: {
          dtId: 'desc'
        }
      })
      if(npp.length > 0) {
        return this.extraService.response(200, 'list npp', npp)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async findKh(token: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const khachHang = await prisma.doiTac.findMany({
        where: {
          loaiDt: 'kh',
          sId,
          sta: true,
        }
      })
      if(khachHang.length > 0) {
        return this.extraService.response(200, 'list khách hàng', khachHang)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async updateNpp(token: string, body: UpdateDoiTacDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {dtId, maDoiTac, tenDoiTac} = body
      const checkMa = await prisma.doiTac.findFirst({
        where: {
          maDoiTac,
          sId,
          sta: true,
          loaiDt: 'npp',
          NOT: {
            dtId
          }

        }
      })
      if(checkMa) {
        return this.extraService.response(209, 'trùng mã', maDoiTac)
      } else {
        const checkTen = await prisma.doiTac.findFirst({
          where: {
            tenDoiTac,
            sId,
            sta: true,
            loaiDt: 'npp',
            NOT: {
              dtId
            }
          }
        })
        if(checkTen) {
          return this.extraService.response(209, 'trùng tên', tenDoiTac)
        } else {
          const update = await prisma.doiTac.updateMany({
            where: {
              sId,
              dtId,
            },
            data: body
            
          })
          if(update.count > 0 ) {
            return this.extraService.response(200, 'đã cập nhật', dtId)
          } else {
            return this.extraService.response(500, 'lỗi', null)
          }
    

        }
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async updateKh(token: string, body: UpdateDoiTacDto) {
    try {
      const sId = await this.extraService.getSId(token)
      const {dtId, maDoiTac, tenDoiTac} = body
      const checkMa = await prisma.doiTac.findFirst({
        where: {
          maDoiTac,
          sId,
          sta: true,
          loaiDt: 'kh',
          NOT: {
            dtId
          }

        }
      })
      if(checkMa) {
        return this.extraService.response(209, 'trùng mã', maDoiTac)
      } else {
        const checkTen = await prisma.doiTac.findFirst({
          where: {
            tenDoiTac,
            sId,
            sta: true,
            loaiDt: 'kh',
            NOT: {
              dtId
            }
          }
        })
        if(checkTen) {
          return this.extraService.response(209, 'trùng tên', tenDoiTac)
        } else {
          const update = await prisma.doiTac.updateMany({
            where: {
              sId,
              dtId,
            },
            data: body
            
          })
          if(update.count > 0 ) {
            return this.extraService.response(200, 'đã cập nhật', dtId)
          } else {
            return this.extraService.response(500, 'lỗi', null)
          }
    

        }
      }
      
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async searchNpp(token: string, keyword: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const search = await prisma.doiTac.findMany({
        where: {
          sId,
          sta: true,
          loaiDt: 'npp',
          OR: [
            {
              maDoiTac: {
                contains: keyword
              }
            },
            {
              tenDoiTac: {
                contains: keyword
              }
            },
            {
              soDt: {
                contains: keyword
              }
            },
            {
              nguoiLienHe: {
                contains: keyword
              }
            }
          ]
        }
      })
      if(search.length > 0) {
        return this.extraService.response(200, 'kết quả', search)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async searchKh(token: string, keyword: string) {
    try {
      const sId = await this.extraService.getSId(token)
      const search = await prisma.doiTac.findMany({
        where: {
          sId,
          sta: true,
          loaiDt: 'kh',
          OR: [
            {
              maDoiTac: {
                contains: keyword
              }
            },
            {
              tenDoiTac: {
                contains: keyword
              }
            },
            {
              soDt: {
                contains: keyword
              }
            },
            {
              nguoiLienHe: {
                contains: keyword
              }
            }
          ]
        }
      })
      if(search.length > 0) {
        return this.extraService.response(200, 'kết quả', search)
      } else {
        return this.extraService.response(404, 'not found', [])
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }
  async remove(token: string, dtId: number) {
    try {
      const sId = await this.extraService.getSId(token)
      const xoa = await prisma.doiTac.updateMany({
        where: {
          dtId,
          sId,
          sta: true,
        },
        data: {
          sta: false
        }
      })
      if(xoa.count > 0) {
        return this.extraService.response(200, 'đã xoá', dtId)
      } else {
        return this.extraService.response(500, 'lỗi', null)
      }
    } catch (error) {
      return this.extraService.response(500, 'lỗi', error)
    }
  }

}
