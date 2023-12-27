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
exports.ShopsService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new client_1.PrismaClient();
let ShopsService = class ShopsService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async create(body) {
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
            }
            else {
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
    async login(body) {
        try {
            const { taiKhoan, matKhau } = body;
            const check = await prisma.shops.findFirst({
                where: {
                    taiKhoan,
                    sta: true,
                },
            });
            if (check) {
                const checkMatKhau = await bcrypt.compare(matKhau, check.matKhau);
                if (checkMatKhau) {
                    const token = await this.extraService.signToken(check);
                    const res = {
                        ...check,
                        token,
                    };
                    return this.extraService.response(200, 'đăng nhập thành công', res);
                }
                else {
                    return this.extraService.response(404, 'mật khẩu không đúng', null);
                }
            }
            else {
                return this.extraService.response(404, 'số điện thoại không đúng', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async taoCauHinh(token, body) {
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
            if (count === 0) {
                const taoCauHinh = await prisma.cauHinh.create({
                    data,
                });
            }
            else {
                const updateCauHinh = await prisma.cauHinh.updateMany({
                    where: {
                        sId,
                        sta: true,
                    },
                    data,
                });
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async getCauHinh(sId) {
        try {
            const cauHinh = await prisma.cauHinh.findFirst({
                where: {
                    sId,
                    sta: true,
                },
            });
            if (cauHinh) {
                return this.extraService.response(200, 'cấu hình', cauHinh);
            }
            else {
                return this.extraService.response(404, 'not found', {
                    mienPhiVc: 0,
                    phiVc: 0,
                    hoanTien: 0,
                    mucHoan: 0,
                    tatShop: false
                });
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async tatMoShop(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const trangThai = await prisma.cauHinh.findFirst({
                where: {
                    sId,
                    sta: true,
                },
                select: {
                    tatShop: true
                }
            });
            const tatMoShop = await prisma.cauHinh.updateMany({
                where: {
                    sId,
                    sta: true
                },
                data: {
                    tatShop: !trangThai.tatShop
                }
            });
            if (tatMoShop.count > 0) {
                return this.extraService.response(200, 'done', !trangThai.tatShop);
            }
            else {
                return this.extraService.response(404, 'lỗi', null);
            }
        }
        catch (error) {
            this.extraService.response(500, 'lỗi', error);
        }
    }
};
exports.ShopsService = ShopsService;
exports.ShopsService = ShopsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], ShopsService);
//# sourceMappingURL=shops.service.js.map