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
exports.PhieuController = void 0;
const common_1 = require("@nestjs/common");
const phieu_service_1 = require("./phieu.service");
const create_phieu_dto_1 = require("./dto/create-phieu.dto");
const swagger_1 = require("@nestjs/swagger");
let PhieuController = class PhieuController {
    constructor(phieuService) {
        this.phieuService = phieuService;
    }
    findAllSanPham(token) {
        return this.phieuService.findAllSanPham(token);
    }
    searchSanPham(token, keyword) {
        return this.phieuService.search(token, keyword);
    }
    taoPhieu(token, body) {
        return this.phieuService.taoPhieu(token, body);
    }
    getPhieuNhapMoiTao(token) {
        return this.phieuService.getPhieuNhapMoiTao(token);
    }
    getPhieuXuatMoiTao(token) {
        return this.phieuService.getPhieuXuatMoiTao(token);
    }
    getPhieuNhap(token, pId) {
        return this.phieuService.getPhieuNhap(token, +pId);
    }
    suaChiTiet(token, body) {
        return this.phieuService.suaChiTiet(token, body);
    }
    xoaPhieuMoiTao(token, pId) {
        return this.phieuService.xoaPhieuMoiTao(token, +pId);
    }
    luuPhieuMoiTao(token, body) {
        return this.phieuService.luuPhieuMoiTao(token, body);
    }
    traNoMotPhieu(token, body) {
        return this.phieuService.traNoMotPhieu(token, body);
    }
    sortPhieu(token, body) {
        return this.phieuService.sortPhieu(token, body);
    }
    sortPhieuXuat(token, body) {
        return this.phieuService.sortPhieuXuat(token, body);
    }
};
exports.PhieuController = PhieuController;
__decorate([
    (0, common_1.Get)('/get-san-pham'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "findAllSanPham", null);
__decorate([
    (0, common_1.Get)('/tim-san-pham/:keyword'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "searchSanPham", null);
__decorate([
    (0, common_1.Post)('/tao-phieu'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phieu_dto_1.CreatePhieuDto]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "taoPhieu", null);
__decorate([
    (0, common_1.Get)('/get-phieu-nhap-moi-tao'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "getPhieuNhapMoiTao", null);
__decorate([
    (0, common_1.Get)('/get-phieu-xuat-moi-tao'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "getPhieuXuatMoiTao", null);
__decorate([
    (0, common_1.Get)('/get-phieu-nhap/:pId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('pId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "getPhieuNhap", null);
__decorate([
    (0, common_1.Put)('sua-chi-tiet'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phieu_dto_1.SuaChiTietDto]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "suaChiTiet", null);
__decorate([
    (0, common_1.Delete)('xoa-phieu-moi-tao/:pId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('pId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "xoaPhieuMoiTao", null);
__decorate([
    (0, common_1.Post)('/luu-phieu-moi-tao'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phieu_dto_1.LuuPhieuDto]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "luuPhieuMoiTao", null);
__decorate([
    (0, common_1.Post)('/tra-no-mot-phieu'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phieu_dto_1.TraNoMotPhieuDto]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "traNoMotPhieu", null);
__decorate([
    (0, common_1.Post)('sort-phieu'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phieu_dto_1.SortPhieuDto]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "sortPhieu", null);
__decorate([
    (0, common_1.Post)('sort-phieu-xuat'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phieu_dto_1.SortPhieuDto]),
    __metadata("design:returntype", void 0)
], PhieuController.prototype, "sortPhieuXuat", null);
exports.PhieuController = PhieuController = __decorate([
    (0, swagger_1.ApiTags)('phieu'),
    (0, common_1.Controller)('phieu'),
    __metadata("design:paramtypes", [phieu_service_1.PhieuService])
], PhieuController);
//# sourceMappingURL=phieu.controller.js.map