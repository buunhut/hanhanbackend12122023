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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let UsersService = class UsersService {
    constructor(extraService) {
        this.extraService = extraService;
    }
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
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async timKiemSanPham(keyword) {
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
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
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
                            const { soLuong, quyDoi, giaBan, giaGiam, phiVc, maxOrder } = sanPhamItem;
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
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
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
                        const { soLuong, quyDoi, giaBan, giaGiam, phiVc, maxOrder } = sanPhamItem;
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
                return this.extraService.response(200, 'sản phẩm by thương hiệu', res);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async dangKy(body) {
        try {
            const soDt = body.soDt.replace('+84', '0');
            const check = await prisma.users.findFirst({
                where: {
                    soDt,
                    sta: true
                }
            });
            if (check) {
                return this.extraService.response(209, 'số đt đã đk', soDt);
            }
            else {
                const data = { ...body, soDt };
                const dangKy = await prisma.users.create({
                    data
                });
                if (dangKy) {
                    return this.extraService.response(200, 'đk thành công', dangKy);
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
    async checkSoDt(body) {
        try {
            const soDt = body.soDt.replace('+84', '0');
            const check = await prisma.users.findFirst({
                where: {
                    soDt,
                    sta: true
                }
            });
            if (check) {
                return this.extraService.response(209, 'số đt đã đk', soDt);
            }
            else {
                return this.extraService.response(404, 'not found', soDt);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async dangNhap(body) {
        try {
            const soDt = body.soDt.replace('+84', '0');
            const { matKhau } = body;
            const dangNhap = await prisma.users.findFirst({
                where: {
                    soDt,
                    sta: true
                }
            });
            if (dangNhap) {
                const checkMatKhau = await prisma.users.findFirst({
                    where: {
                        soDt,
                        matKhau,
                        sta: true,
                    }
                });
                if (checkMatKhau) {
                    const token = await this.extraService.signToken(dangNhap);
                    const res = {
                        ...dangNhap,
                        token,
                        matKhau: ''
                    };
                    return this.extraService.response(200, 'đang nhập thành công', res);
                }
                else {
                    return this.extraService.response(405, 'sai mật khẩu', matKhau);
                }
            }
            else {
                return this.extraService.response(404, 'sai số điện thoại', soDt);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async demLuotTruyCap(body) {
        try {
            await prisma.demLuotTruyCap.create({
                data: body
            });
            const counts = await prisma.demLuotTruyCap.count();
            return this.extraService.response(200, 'lượt truy cập', counts);
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], UsersService);
//# sourceMappingURL=users.service.js.map