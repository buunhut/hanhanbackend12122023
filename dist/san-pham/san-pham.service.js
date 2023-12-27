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
exports.SanPhamService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const fs = require("fs");
const prisma = new client_1.PrismaClient();
let SanPhamService = class SanPhamService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async create(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const count = await prisma.sanPham.count({
                where: {
                    sId,
                },
            });
            let maTuDong = count + 1;
            maTuDong = Math.max(0, Math.floor(maTuDong));
            const digits = Math.max(6 - Math.floor(Math.log10(maTuDong)), 0);
            let maSp = `MTD${'0'.repeat(digits)}${maTuDong}`;
            let kId = count + 1;
            const data = {
                ...body,
                kId,
                maSp,
                sId,
            };
            const create = await prisma.sanPham.createMany({
                data,
            });
            if (create) {
                return this.extraService.response(200, 'đã tạo sản phẩm', kId);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async createDvt(token, kId) {
        try {
            const sId = await this.extraService.getSId(token);
            const count = await prisma.sanPham.count({
                where: {
                    sId,
                },
            });
            let maTuDong = count + 1;
            maTuDong = Math.max(0, Math.floor(maTuDong));
            const digits = Math.max(6 - Math.floor(Math.log10(maTuDong)), 0);
            let maSp = `MTD${'0'.repeat(digits)}${maTuDong}`;
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
            if (taoDvt.count > 0) {
                return this.extraService.response(200, 'đã tạo dvt', maSp);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async readSanPham(token) {
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
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateMaSp(token, body) {
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
            }
            else {
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
    async updateTenSp(token, body) {
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
            }
            else {
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
    async updateDvt(token, body) {
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
                }
                else {
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
                    }
                    else {
                        return this.extraService.response(500, 'lỗi', null);
                    }
                }
            }
            else {
                return this.extraService.response(404, 'not found', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateGiaNhap(token, body) {
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
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateGiaBan(token, body) {
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
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateGiaGiam(token, body) {
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
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updatePhiVc(token, body) {
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
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateQuyDoi(token, body) {
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
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateMaxOrder(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { spId, maxOrder } = body;
            const update = await prisma.sanPham.updateMany({
                where: {
                    spId,
                    sId,
                    sta: true,
                },
                data: {
                    maxOrder
                }
            });
            if (update) {
                return this.extraService.response(200, 'đã cập nhật', maxOrder);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateSho(token, spId) {
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
                }
                else {
                    return this.extraService.response(500, 'lỗi', null);
                }
            }
            else {
                return this.extraService.response(404, 'not found', spId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async delete(token, spId) {
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
                        const imagePath = process.cwd() + '/public/img/' + hinhAnh;
                        if (fs.existsSync(imagePath)) {
                            fs.unlinkSync(imagePath);
                        }
                    }
                    return this.extraService.response(200, 'đã xoá sản phẩm', spId);
                }
                else {
                    return this.extraService.response(500, 'lỗi', null);
                }
            }
            else {
                return this.extraService.response(404, 'not found', spId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
};
exports.SanPhamService = SanPhamService;
exports.SanPhamService = SanPhamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], SanPhamService);
//# sourceMappingURL=san-pham.service.js.map