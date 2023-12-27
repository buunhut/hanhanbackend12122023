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
exports.DanhMucService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const service_1 = require("../service");
const prisma = new client_1.PrismaClient();
const fs = require("fs");
let DanhMucService = class DanhMucService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async read(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const listDanhMuc = await prisma.danhMuc.findMany({
                where: {
                    sId,
                    sta: true
                },
                orderBy: {
                    dmId: 'desc'
                }
            });
            if (listDanhMuc.length > 0) {
                return this.extraService.response(200, 'list danh mục', listDanhMuc);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async create(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const create = await prisma.danhMuc.create({
                data: {
                    sId,
                },
            });
            if (create) {
                return this.extraService.response(200, 'đã tạo danh mục', create);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async update(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { dmId, tenDanhMuc } = body;
            const checkTen = await prisma.danhMuc.findFirst({
                where: {
                    tenDanhMuc,
                    sId,
                    sta: true,
                    NOT: {
                        dmId,
                    },
                },
            });
            if (checkTen) {
                return this.extraService.response(206, 'trùng tên danh mục', tenDanhMuc);
            }
            else {
                const update = await prisma.danhMuc.updateMany({
                    where: {
                        dmId,
                        sId,
                        sta: true,
                    },
                    data: {
                        tenDanhMuc,
                    },
                });
                if (update) {
                    return this.extraService.response(200, 'đã cập nhật', tenDanhMuc);
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
    async delete(token, dmId) {
        try {
            const sId = await this.extraService.getSId(token);
            const checkDmId = await prisma.danhMuc.findFirst({
                where: {
                    dmId,
                    sId,
                    sta: true,
                },
            });
            if (checkDmId) {
                const { hinhAnh } = checkDmId;
                const imagePath = process.cwd() + '/public/img/' + hinhAnh;
                const xoaDanhMuc = await prisma.danhMuc.updateMany({
                    where: {
                        dmId,
                        sId,
                        sta: true,
                    },
                    data: {
                        sta: false,
                    },
                });
                if (xoaDanhMuc) {
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                    return this.extraService.response(200, 'đã xoá danh mục', null);
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
    async search(token, keyword) {
        try {
            const sId = await this.extraService.getSId(token);
            const result = await prisma.danhMuc.findMany({
                where: {
                    sId,
                    sta: true,
                    OR: [
                        {
                            tenDanhMuc: {
                                contains: keyword
                            }
                        }
                    ]
                }
            });
            if (result.length > 0) {
                return this.extraService.response(200, 'kết quả tìm kiếm', result);
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
exports.DanhMucService = DanhMucService;
exports.DanhMucService = DanhMucService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], DanhMucService);
//# sourceMappingURL=danh-muc.service.js.map