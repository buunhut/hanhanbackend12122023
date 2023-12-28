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
exports.PhieuService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let PhieuService = class PhieuService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    create(createPhieuDto) {
        return 'This action adds a new phieu';
    }
    async findAllSanPham(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const sanPham = await prisma.sanPham.findMany({
                where: {
                    sId,
                    sta: true
                }
            });
            if (sanPham.length > 0) {
                const res = sanPham.map((item) => {
                    const { giaNhap, giaBan, giaGiam, phiVc, soLuong, maxOrder } = item;
                    return {
                        ...item,
                        giaNhap: Number(giaNhap),
                        giaBan: Number(giaBan),
                        giaGiam: Number(giaGiam),
                        phiVc: Number(phiVc),
                        soLuong: Number(soLuong),
                        maxOrder: Number(maxOrder)
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
    async search(token, keyword) {
        try {
            const sId = await this.extraService.getSId(token);
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
            });
            if (search.length > 0) {
                const res = search.map((item) => {
                    const { giaNhap, giaBan, giaGiam, phiVc, maxOrder, soLuong } = item;
                    return {
                        ...item,
                        giaNhap: Number(giaNhap),
                        giaBan: Number(giaBan),
                        giaGiam: Number(giaGiam),
                        phiVc: Number(phiVc),
                        maxOrder: Number(maxOrder),
                        soLuong: Number(soLuong)
                    };
                });
                return this.extraService.response(200, 'kết quả tìm kiếm', res);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async taoPhieu(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { dtId, loaiPhieu } = body;
            const thongTinDoiTac = await prisma.doiTac.findFirst({
                where: {
                    dtId,
                    sId,
                    sta: true
                }
            });
            const { maDoiTac } = thongTinDoiTac;
            const count = await prisma.phieu.count({
                where: {
                    sId,
                    loaiPhieu
                }
            });
            const soPhieu = loaiPhieu + (count + 1);
            const data = {
                ...body,
                maDoiTac,
                soPhieu,
                sId
            };
            const taoPhieu = await prisma.phieu.create({
                data
            });
            if (taoPhieu) {
                return this.extraService.response(200, 'đã tạo phiếu', taoPhieu.pId);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async getPhieuNhapMoiTao(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const phieuNhapMoiTao = await prisma.phieu.findMany({
                where: {
                    trangThai: 'moiTao',
                    sId,
                    sta: true,
                    loaiPhieu: 'pn'
                },
                include: {
                    bangChiTiet: {
                        where: {
                            sta: true,
                            loaiPhieu: 'pn'
                        }
                    },
                    doiTac: true
                },
                orderBy: {
                    pId: 'desc'
                }
            });
            if (phieuNhapMoiTao.length > 0) {
                const res = phieuNhapMoiTao.map((item) => {
                    const { soTien, thanhToan, bangChiTiet } = item;
                    const chiTietMapped = bangChiTiet.map((item) => {
                        const { quyDoi, soLuong, donGia } = item;
                        return {
                            ...item,
                            quyDoi: Number(quyDoi),
                            soLuong: Number(soLuong),
                            donGia: Number(donGia),
                            thanhTien: Number(soLuong) * Number(donGia)
                        };
                    });
                    return {
                        ...item,
                        bangChiTiet: chiTietMapped,
                        soTien: Number(soTien),
                        thanhToan: Number(thanhToan),
                        conNo: Number(soTien) - Number(thanhToan)
                    };
                });
                console.log(res);
                return this.extraService.response(200, 'phiếu nhập mới tạo', res);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async getPhieuXuatMoiTao(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const phieuXuatMoiTao = await prisma.phieu.findMany({
                where: {
                    trangThai: 'moiTao',
                    sId,
                    sta: true,
                    loaiPhieu: 'px'
                },
                include: {
                    bangChiTiet: {
                        where: {
                            sta: true,
                            loaiPhieu: 'px'
                        }
                    },
                    doiTac: true
                },
                orderBy: {
                    pId: 'desc'
                }
            });
            if (phieuXuatMoiTao.length > 0) {
                const res = phieuXuatMoiTao.map((item) => {
                    const { soTien, thanhToan, bangChiTiet } = item;
                    const chiTietMapped = bangChiTiet.map((item) => {
                        const { quyDoi, soLuong, donGia } = item;
                        return {
                            ...item,
                            quyDoi: Number(quyDoi),
                            soLuong: Number(soLuong),
                            donGia: Number(donGia),
                            thanhTien: Number(soLuong) * Number(donGia)
                        };
                    });
                    return {
                        ...item,
                        bangChiTiet: chiTietMapped,
                        soTien: Number(soTien),
                        thanhToan: Number(thanhToan),
                        conNo: Number(soTien) - Number(thanhToan)
                    };
                });
                return this.extraService.response(200, 'phiếu xuất mới tạo', res);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async suaChiTiet(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { dId } = body;
            const data = {
                ...body,
            };
            const update = await prisma.bangChiTiet.updateMany({
                where: {
                    dId,
                    sId,
                    sta: true,
                },
                data
            });
            if (update.count > 0) {
                return this.extraService.response(200, 'đã cập nhật', body);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async suaDoiTac(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { pId, dtId } = body;
            const thongTinDoiTac = await prisma.doiTac.findFirst({
                where: {
                    sId,
                    sta: true,
                    dtId,
                }
            });
            if (thongTinDoiTac) {
                const { maDoiTac } = thongTinDoiTac;
                const capNhat = await prisma.phieu.updateMany({
                    where: {
                        pId,
                        sId,
                    },
                    data: {
                        maDoiTac,
                        dtId
                    }
                });
                if (capNhat.count > 0) {
                    return this.extraService.response(200, 'done', maDoiTac);
                }
                else {
                    return this.extraService.response(500, 'lỗi', null);
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
    async getPhieuNhap(token, pId) {
        try {
            const sId = await this.extraService.getSId(token);
            const phieu = await prisma.phieu.findFirst({
                where: {
                    sId,
                    sta: true,
                    pId
                },
                include: {
                    bangChiTiet: {
                        where: {
                            sta: true
                        }
                    },
                    doiTac: true
                }
            });
            if (phieu) {
                const { soTien, thanhToan, bangChiTiet } = phieu;
                const bangChiTietMapped = bangChiTiet.map((item) => {
                    const { quyDoi, soLuong, donGia } = item;
                    return {
                        ...item,
                        quyDoi: Number(quyDoi),
                        soLuong: Number(soLuong),
                        donGia: Number(donGia),
                        thanhTien: Number(soLuong) * Number(donGia)
                    };
                });
                const res = {
                    ...phieu,
                    bangChiTiet: bangChiTietMapped,
                    soTien: Number(soTien),
                    thanhToan: Number(thanhToan),
                    conNo: Number(soTien) - Number(thanhToan)
                };
                return this.extraService.response(200, 'phiếu nhập', res);
            }
            else {
                return this.extraService.response(404, 'not found', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    update(id, updatePhieuDto) {
        return `This action updates a #${id} phieu`;
    }
    async xoaPhieuMoiTao(token, pId) {
        try {
            const sId = await this.extraService.getSId(token);
            const xoaChiTiet = await prisma.bangChiTiet.updateMany({
                where: {
                    pId,
                    sId,
                    sta: true,
                },
                data: {
                    sta: false
                }
            });
            const xoaPhieu = await prisma.phieu.updateMany({
                where: {
                    pId,
                    sId,
                    sta: true,
                },
                data: {
                    sta: false
                }
            });
            if (xoaPhieu.count > 0) {
                return this.extraService.response(200, 'đã xoá phiếu', pId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async luuPhieuMoiTao(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { pId } = body;
            const thongTinChiTiet = await prisma.bangChiTiet.findMany({
                where: {
                    pId,
                    sId,
                    sta: true
                }
            });
            thongTinChiTiet.forEach(async (item) => {
                const { spId, kId, soLuong, quyDoi, loaiPhieu } = item;
                const qty = Number(soLuong) * Number(quyDoi);
                if (loaiPhieu === 'pn') {
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
                    });
                }
                else {
                    const truKho = await prisma.sanPham.updateMany({
                        where: {
                            kId,
                            sId,
                            sta: true
                        },
                        data: {
                            soLuong: {
                                decrement: qty
                            }
                        }
                    });
                }
            });
            const data = {
                ...body,
                trangThai: 'luu'
            };
            const luuPhieu = await prisma.phieu.updateMany({
                where: {
                    pId,
                    sId,
                    trangThai: 'moiTao',
                    sta: true
                },
                data
            });
            if (luuPhieu.count > 0) {
                return this.extraService.response(200, 'đã lưu phiếu', pId);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async traNoMotPhieu(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { pId, thanhToan } = body;
            const phieu = await prisma.phieu.findFirst({
                where: {
                    pId,
                    sId,
                    sta: true
                },
            });
            const capNhat = await prisma.phieu.updateMany({
                where: {
                    pId,
                    sId,
                    sta: true,
                },
                data: {
                    thanhToan: thanhToan + Number(phieu.thanhToan)
                }
            });
            if (capNhat.count > 0) {
                return this.extraService.response(200, 'đã trả nợ', pId);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
            console.log(body);
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async sortPhieu(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            let whereCondition = {
                sId,
                loaiPhieu: 'pn',
                trangThai: 'luu',
                sta: true,
            };
            if (body.dtId) {
                whereCondition.dtId = body.dtId;
            }
            if (body.from) {
                if (body.to) {
                    whereCondition.ngay = {
                        gte: `${body.from}T00:00:00.000Z`,
                        lte: `${body.to}T00:00:00.000Z`,
                    };
                }
                else {
                    whereCondition.ngay = `${body.from}T00:00:00.000Z`;
                }
            }
            if (body.to) {
                if (body.from) {
                    whereCondition.ngay = {
                        gte: `${body.from}T00:00:00.000Z`,
                        lte: `${body.to}T00:00:00.000Z`,
                    };
                }
                else {
                    whereCondition.ngay = `${body.to}T00:00:00.000Z`;
                }
            }
            const chiTietNhap = await prisma.phieu.findMany({
                where: whereCondition,
                include: {
                    bangChiTiet: true,
                    doiTac: true,
                },
                orderBy: {
                    pId: 'desc'
                }
            });
            if (chiTietNhap.length > 0) {
                if (body.locNo) {
                    const res = chiTietNhap.map((item) => {
                        const { soTien, thanhToan, soPhieu, bangChiTiet, doiTac } = item;
                        const conNo = Number(soTien) - Number(thanhToan);
                        if (conNo > 0) {
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
                    }).filter(Boolean);
                    ;
                    console.log(res);
                    if (res !== undefined) {
                        return this.extraService.response(200, 'chi tiết nhập', res);
                    }
                    else {
                        return this.extraService.response(404, 'not found', []);
                    }
                }
                else {
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
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async sortPhieuXuat(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            let whereCondition = {
                sId,
                loaiPhieu: 'px',
                trangThai: 'luu',
                sta: true,
            };
            if (body.dtId) {
                whereCondition.dtId = body.dtId;
            }
            if (body.from) {
                if (body.to) {
                    whereCondition.ngay = {
                        gte: `${body.from}T00:00:00.000Z`,
                        lte: `${body.to}T00:00:00.000Z`,
                    };
                }
                else {
                    whereCondition.ngay = `${body.from}T00:00:00.000Z`;
                }
            }
            if (body.to) {
                if (body.from) {
                    whereCondition.ngay = {
                        gte: `${body.from}T00:00:00.000Z`,
                        lte: `${body.to}T00:00:00.000Z`,
                    };
                }
                else {
                    whereCondition.ngay = `${body.to}T00:00:00.000Z`;
                }
            }
            const chiTietXuat = await prisma.phieu.findMany({
                where: whereCondition,
                include: {
                    bangChiTiet: true,
                    doiTac: true,
                },
                orderBy: {
                    pId: 'desc'
                }
            });
            if (chiTietXuat.length > 0) {
                if (body.locNo) {
                    const res = chiTietXuat.map((item) => {
                        const { soTien, thanhToan, soPhieu, bangChiTiet, doiTac } = item;
                        const conNo = Number(soTien) - Number(thanhToan);
                        if (conNo > 0) {
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
                    })
                        .filter(Boolean);
                    if (res !== undefined) {
                        return this.extraService.response(200, 'chi tiết xuất', res);
                    }
                    else {
                        return this.extraService.response(404, 'not found', []);
                    }
                }
                else {
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
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
};
exports.PhieuService = PhieuService;
exports.PhieuService = PhieuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], PhieuService);
//# sourceMappingURL=phieu.service.js.map