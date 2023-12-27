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
exports.DoiTacService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let DoiTacService = class DoiTacService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async create(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const data = {
                ...body,
                sId
            };
            const create = await prisma.doiTac.createMany({
                data
            });
            if (create.count > 0) {
                return this.extraService.response(200, 'đã tạo đối tác', data);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async findNpp(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const npp = await prisma.doiTac.findMany({
                where: {
                    loaiDt: 'npp',
                    sId,
                    sta: true,
                },
                orderBy: {
                    dtId: 'desc'
                }
            });
            if (npp.length > 0) {
                return this.extraService.response(200, 'list npp', npp);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async findKh(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const khachHang = await prisma.doiTac.findMany({
                where: {
                    loaiDt: 'kh',
                    sId,
                    sta: true,
                }
            });
            if (khachHang.length > 0) {
                return this.extraService.response(200, 'list khách hàng', khachHang);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateNpp(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { dtId, maDoiTac, tenDoiTac } = body;
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
            });
            if (checkMa) {
                return this.extraService.response(209, 'trùng mã', maDoiTac);
            }
            else {
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
                });
                if (checkTen) {
                    return this.extraService.response(209, 'trùng tên', tenDoiTac);
                }
                else {
                    const update = await prisma.doiTac.updateMany({
                        where: {
                            sId,
                            dtId,
                        },
                        data: body
                    });
                    if (update.count > 0) {
                        return this.extraService.response(200, 'đã cập nhật', dtId);
                    }
                    else {
                        return this.extraService.response(500, 'lỗi', null);
                    }
                }
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async updateKh(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { dtId, maDoiTac, tenDoiTac } = body;
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
            });
            if (checkMa) {
                return this.extraService.response(209, 'trùng mã', maDoiTac);
            }
            else {
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
                });
                if (checkTen) {
                    return this.extraService.response(209, 'trùng tên', tenDoiTac);
                }
                else {
                    const update = await prisma.doiTac.updateMany({
                        where: {
                            sId,
                            dtId,
                        },
                        data: body
                    });
                    if (update.count > 0) {
                        return this.extraService.response(200, 'đã cập nhật', dtId);
                    }
                    else {
                        return this.extraService.response(500, 'lỗi', null);
                    }
                }
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async searchNpp(token, keyword) {
        try {
            const sId = await this.extraService.getSId(token);
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
            });
            if (search.length > 0) {
                return this.extraService.response(200, 'kết quả', search);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async searchKh(token, keyword) {
        try {
            const sId = await this.extraService.getSId(token);
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
            });
            if (search.length > 0) {
                return this.extraService.response(200, 'kết quả', search);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async remove(token, dtId) {
        try {
            const sId = await this.extraService.getSId(token);
            const xoa = await prisma.doiTac.updateMany({
                where: {
                    dtId,
                    sId,
                    sta: true,
                },
                data: {
                    sta: false
                }
            });
            if (xoa.count > 0) {
                return this.extraService.response(200, 'đã xoá', dtId);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
};
exports.DoiTacService = DoiTacService;
exports.DoiTacService = DoiTacService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], DoiTacService);
//# sourceMappingURL=doi-tac.service.js.map