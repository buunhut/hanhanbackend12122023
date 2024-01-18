"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiTietService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ChiTietService = class ChiTietService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async create(token, body) {
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
                }
                else {
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
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async getChiTietNhap(token) {
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
                    bangChiTiet: {
                        where: {
                            sta: true
                        }
                    },
                    doiTac: true,
                },
                orderBy: {
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
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async getChiTietXuat(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const chiTietXuat = await prisma.phieu.findMany({
                where: {
                    sId,
                    loaiPhieu: 'px',
                    trangThai: 'luu',
                    sta: true,
                },
                include: {
                    bangChiTiet: {
                        where: {
                            sta: true
                        }
                    },
                    doiTac: true,
                },
                orderBy: {
                    pId: 'desc'
                }
            });
            if (chiTietXuat.length > 0) {
                const res = chiTietXuat.map((item) => {
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
                return this.extraService.response(200, 'chi tiết xuất', res);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async timChiTietNhap(token, keyword) {
        try {
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
                    bangChiTiet: {
                        where: {
                            sta: true
                        }
                    },
                    doiTac: true,
                },
                orderBy: {
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
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async suaChiTietDaLuu(token, pId) {
        try {
            const sId = await this.extraService.getSId(token);
            const thongTinSanPham = await prisma.bangChiTiet.findMany({
                where: {
                    pId,
                    sId,
                    sta: true
                }
            });
            if (thongTinSanPham.length > 0) {
                thongTinSanPham.forEach(async (item) => {
                    const { kId, soLuong, quyDoi, loaiPhieu } = item;
                    if (loaiPhieu === 'pn') {
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
                        });
                    }
                    else {
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
                        });
                    }
                });
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
                });
                if (suaPhieu.count > 0) {
                    return this.extraService.response(200, 'đã sữa', pId);
                }
                else {
                    return this.extraService.response(500, 'lỗi', null);
                }
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    findOne(id) {
        return `This action returns a #${id} chiTiet`;
    }
    update(id, updateChiTietDto) {
        return `This action updates a #${id} chiTiet`;
    }
    async remove(token, dId) {
        try {
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
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lôi', error);
        }
    }
};
exports.ChiTietService = ChiTietService;
exports.ChiTietService = ChiTietService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], ChiTietService);
//# sourceMappingURL=chi-tiet.service.js.map