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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanPhamController = void 0;
const common_1 = require("@nestjs/common");
const san_pham_service_1 = require("./san-pham.service");
const create_san_pham_dto_1 = require("./dto/create-san-pham.dto");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("../service");
let SanPhamController = class SanPhamController {
    constructor(sanPhamService) {
        this.sanPhamService = sanPhamService;
    }
    create(token, body) {
        return this.sanPhamService.create(token, body);
    }
    createDvt(token, kId) {
        return this.sanPhamService.createDvt(token, +kId);
    }
    readSanPham(token) {
        return this.sanPhamService.readSanPham(token);
    }
    updateMaSp(token, body) {
        return this.sanPhamService.updateMaSp(token, body);
    }
    updateTenSp(token, body) {
        return this.sanPhamService.updateTenSp(token, body);
    }
    updateDvt(token, body) {
        return this.sanPhamService.updateDvt(token, body);
    }
    updateGiaNhap(token, body) {
        return this.sanPhamService.updateGiaNhap(token, body);
    }
    updateGiaBan(token, body) {
        return this.sanPhamService.updateGiaBan(token, body);
    }
    updateGiaGiam(token, body) {
        return this.sanPhamService.updateGiaGiam(token, body);
    }
    updatePhiVc(token, body) {
        return this.sanPhamService.updatePhiVc(token, body);
    }
    updateQuyDoi(token, body) {
        return this.sanPhamService.updateQuyDoi(token, body);
    }
    updateMaxOrder(token, body) {
        return this.sanPhamService.updateMaxOrder(token, body);
    }
    updateSho(token, spId) {
        return this.sanPhamService.updateSho(token, +spId);
    }
    delete(token, spId) {
        return this.sanPhamService.delete(token, +spId);
    }
};
exports.SanPhamController = SanPhamController;
__decorate([
    (0, common_1.Post)('tao-san-pham'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.CreateSanPhamDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('tao-don-vi-tinh/:kId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('kId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "createDvt", null);
__decorate([
    (0, common_1.Get)('get-san-pham'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "readSanPham", null);
__decorate([
    (0, common_1.Put)('cap-nhat-ma-san-pham'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateMaSpDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateMaSp", null);
__decorate([
    (0, common_1.Put)('cap-nhat-ten-san-pham'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateTenSpDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateTenSp", null);
__decorate([
    (0, common_1.Put)('cap-nhat-dvt-san-pham'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateDvtDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateDvt", null);
__decorate([
    (0, common_1.Put)('cap-nhat-gia-nhap'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateGiaNhapDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateGiaNhap", null);
__decorate([
    (0, common_1.Put)('cap-nhat-gia-ban'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateGiaBanDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateGiaBan", null);
__decorate([
    (0, common_1.Put)('cap-nhat-gia-giam'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateGiaGiamDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateGiaGiam", null);
__decorate([
    (0, common_1.Put)('cap-nhat-phi-vc'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdatePhiVcDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updatePhiVc", null);
__decorate([
    (0, common_1.Put)('cap-nhat-quy-doi'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateQuyDoiDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateQuyDoi", null);
__decorate([
    (0, common_1.Put)('cap-nhat-maxorder'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_san_pham_dto_1.UpdateMaxOrderDto]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateMaxOrder", null);
__decorate([
    (0, common_1.Put)('cap-nhat-sho/:spId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('spId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "updateSho", null);
__decorate([
    (0, common_1.Delete)('xoa-san-pham/:spId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('spId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], SanPhamController.prototype, "delete", null);
exports.SanPhamController = SanPhamController = __decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, swagger_1.ApiTags)('sanPham'),
    (0, common_1.Controller)('san-pham'),
    __metadata("design:paramtypes", [san_pham_service_1.SanPhamService])
], SanPhamController);
//# sourceMappingURL=san-pham.controller.js.map