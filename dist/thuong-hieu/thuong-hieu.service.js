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
exports.ThuongHieuService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const fs = require("fs");
const prisma = new client_1.PrismaClient();
let ThuongHieuService = class ThuongHieuService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async read(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const listThuongHieu = await prisma.thuongHieu.findMany({
                where: {
                    sId,
                    sta: true
                },
                orderBy: {
                    thId: 'desc'
                }
            });
            const uniqueTenThuongHieu = {};
            const filteredListThuongHieu = listThuongHieu.filter(thuongHieu => {
                if (!uniqueTenThuongHieu[thuongHieu.tenThuongHieu]) {
                    uniqueTenThuongHieu[thuongHieu.tenThuongHieu] = true;
                    return true;
                }
                return false;
            });
            if (filteredListThuongHieu.length > 0) {
                console.log(filteredListThuongHieu);
                return this.extraService.response(200, 'list thương hiệu', filteredListThuongHieu);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async create(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const data = {
                ...body,
                sId
            };
            const create = await prisma.thuongHieu.create({
                data
            });
            if (create) {
                return this.extraService.response(200, 'đã tạo thương hiệu', create);
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
            const { thId, tenThuongHieu } = body;
            const getTenThuongHieu = await prisma.thuongHieu.findFirst({
                where: {
                    sId,
                    sta: true,
                    thId
                },
                select: {
                    tenThuongHieu: true
                }
            });
            const tenCapNhat = getTenThuongHieu.tenThuongHieu;
            const update = await prisma.thuongHieu.updateMany({
                where: {
                    tenThuongHieu: tenCapNhat,
                    sId,
                    sta: true,
                },
                data: {
                    tenThuongHieu,
                },
            });
            if (update) {
                return this.extraService.response(200, 'đã cập nhật', tenThuongHieu);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async delete(token, thId) {
        try {
            const sId = await this.extraService.getSId(token);
            const checkThId = await prisma.thuongHieu.findFirst({
                where: {
                    thId,
                    sId,
                    sta: true,
                },
            });
            if (checkThId) {
                const { hinhAnh } = checkThId;
                const imagePath = process.cwd() + '/public/img/' + hinhAnh;
                const xoaDanhMuc = await prisma.thuongHieu.updateMany({
                    where: {
                        thId,
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
                return this.extraService.response(404, 'not found', thId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async search(token, keyword) {
        try {
            const sId = await this.extraService.getSId(token);
            const result = await prisma.thuongHieu.findMany({
                where: {
                    sId,
                    sta: true,
                    OR: [
                        {
                            tenThuongHieu: {
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
exports.ThuongHieuService = ThuongHieuService;
exports.ThuongHieuService = ThuongHieuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], ThuongHieuService);
//# sourceMappingURL=thuong-hieu.service.js.map