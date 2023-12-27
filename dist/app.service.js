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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const client_1 = require("@prisma/client");
const fs = require("fs");
const prisma = new client_1.PrismaClient();
let AppService = class AppService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async uploadHinhDanhMuc(token, body, file) {
        try {
            const sId = await this.extraService.getSId(token);
            const { dmId } = body;
            const hinhAnh = file.filename;
            console.log(hinhAnh);
            const upHinh = await prisma.danhMuc.updateMany({
                where: {
                    dmId: +dmId,
                    sId,
                    sta: true,
                },
                data: {
                    hinhAnh,
                },
            });
            if (upHinh) {
                return this.extraService.response(200, 'đã up hình', upHinh);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async deleteHinhDanhMuc(token, dmId) {
        try {
            const sId = await this.extraService.getSId(token);
            const checkDmId = await prisma.danhMuc.findFirst({
                where: {
                    dmId,
                    sId,
                    sta: true,
                },
            });
            console.log(checkDmId);
            if (checkDmId) {
                const { hinhAnh } = checkDmId;
                const imagePath = process.cwd() + '/public/img/' + hinhAnh;
                const xoa = await prisma.danhMuc.updateMany({
                    where: {
                        dmId,
                        sId,
                        sta: true,
                    },
                    data: {
                        hinhAnh: null,
                    },
                });
                if (xoa) {
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                    return this.extraService.response(200, 'đã xoá hình', null);
                }
            }
            else {
                return this.extraService.response(404, 'not found', dmId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async uploadHinhThuongHieu(token, body, file) {
        try {
            const sId = await this.extraService.getSId(token);
            const { thId } = body;
            const hinhAnh = file.filename;
            const upHinh = await prisma.thuongHieu.updateMany({
                where: {
                    thId: +thId,
                    sId,
                    sta: true,
                },
                data: {
                    hinhAnh,
                },
            });
            if (upHinh) {
                return this.extraService.response(200, 'đã up hình', upHinh);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async deleteHinhThuongHieu(token, thId) {
        console.log(thId);
        try {
            const sId = await this.extraService.getSId(token);
            const checkThId = await prisma.thuongHieu.findFirst({
                where: {
                    thId,
                    sId,
                    sta: true,
                },
            });
            console.log("check", checkThId);
            if (checkThId) {
                const { hinhAnh } = checkThId;
                const imagePath = process.cwd() + '/public/img/' + hinhAnh;
                const xoa = await prisma.thuongHieu.updateMany({
                    where: {
                        thId,
                        sId,
                        sta: true,
                    },
                    data: {
                        hinhAnh: null,
                    },
                });
                if (xoa) {
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                    return this.extraService.response(200, 'đã xoá hình', null);
                }
            }
            else {
                return this.extraService.response(404, 'not found', thId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async uploadHinhSanPham(token, body, file) {
        try {
            const sId = await this.extraService.getSId(token);
            const { spId } = body;
            const hinhAnh = file.filename;
            const upHinh = await prisma.sanPham.updateMany({
                where: {
                    spId: +spId,
                    sId,
                    sta: true,
                },
                data: {
                    hinhAnh,
                },
            });
            if (upHinh) {
                return this.extraService.response(200, 'đã up hình', upHinh);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async deleteHinhSanPham(token, spId) {
        try {
            const sId = await this.extraService.getSId(token);
            const checkSpId = await prisma.sanPham.findFirst({
                where: {
                    spId,
                    sId,
                    sta: true,
                },
            });
            if (checkSpId) {
                const { hinhAnh } = checkSpId;
                const imagePath = process.cwd() + '/public/img/' + hinhAnh;
                const xoa = await prisma.sanPham.updateMany({
                    where: {
                        spId,
                        sId,
                        sta: true,
                    },
                    data: {
                        hinhAnh: null,
                    },
                });
                if (xoa) {
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                    return this.extraService.response(200, 'đã xoá hình', null);
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
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], AppService);
//# sourceMappingURL=app.service.js.map