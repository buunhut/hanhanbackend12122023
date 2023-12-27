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
exports.NhanVienService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../service");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let NhanVienService = class NhanVienService {
    constructor(extraService) {
        this.extraService = extraService;
    }
    async create(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const create = await prisma.nhanVien.create({
                data: {
                    sId
                }
            });
            if (create) {
                return this.extraService.response(200, 'đã thêm nhân viên', create);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async findAll(token) {
        try {
            const sId = await this.extraService.getSId(token);
            const listNhanVien = await prisma.nhanVien.findMany({
                where: {
                    sId,
                    sta: true
                }
            });
            if (listNhanVien.length > 0) {
                return this.extraService.response(200, 'list nhân viên', listNhanVien);
            }
            else {
                return this.extraService.response(404, 'not found', []);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    findOne(id) {
        return `This action returns a #${id} nhanVien`;
    }
    async update(token, body) {
        try {
            const sId = await this.extraService.getSId(token);
            const { nvId, tenNhanVien, soDt, diaChi, chucVu, mucLuong } = body;
            const data = {
                tenNhanVien, soDt, diaChi, chucVu, mucLuong
            };
            const capNhat = await prisma.nhanVien.updateMany({
                where: {
                    nvId,
                    sId,
                    sta: true,
                },
                data
            });
            if (capNhat.count > 0) {
                return this.extraService.response(200, 'đã cập nhật', nvId);
            }
            else {
                return this.extraService.response(500, 'lỗi', null);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
    async delete(token, nvId) {
        try {
            const sId = await this.extraService.getSId(token);
            const xoaNhanVien = await prisma.nhanVien.updateMany({
                where: {
                    nvId,
                    sta: true,
                    sId,
                },
                data: {
                    sta: false
                }
            });
            if (xoaNhanVien.count > 0) {
                return this.extraService.response(200, 'đã xoá', nvId);
            }
            else {
                return this.extraService.response(404, 'not found', nvId);
            }
        }
        catch (error) {
            return this.extraService.response(500, 'lỗi', error);
        }
    }
};
exports.NhanVienService = NhanVienService;
exports.NhanVienService = NhanVienService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.ExtraService])
], NhanVienService);
//# sourceMappingURL=nhan-vien.service.js.map