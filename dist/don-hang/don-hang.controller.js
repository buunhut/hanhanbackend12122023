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
exports.DonHangController = void 0;
const common_1 = require("@nestjs/common");
const don_hang_service_1 = require("./don-hang.service");
const create_don_hang_dto_1 = require("./dto/create-don-hang.dto");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("../service");
let DonHangController = class DonHangController {
    constructor(donHangService) {
        this.donHangService = donHangService;
    }
    create(token, body) {
        return this.donHangService.create(token, body);
    }
    chiTietDonHangByUser(token, uId) {
        return this.donHangService.chiTietDonHangByUser(token, +uId);
    }
    huyDonHang(token, oId) {
        return this.donHangService.huyDonHang(token, +oId);
    }
    chiTietDonHangByShop(token) {
        return this.donHangService.chiTietDonHangByShop(token);
    }
    inDonHangByShop(token, oId) {
        return this.donHangService.inDonHangByShop(token, +oId);
    }
    capNhatNguoiGiao(token, body) {
        return this.donHangService.capNhatNguoiGiao(token, body);
    }
    capNhatThanhToan(token, body) {
        return this.donHangService.capNhatThanhToan(token, body);
    }
    sortDonHang(token, body) {
        return this.donHangService.sortDonHang(token, body);
    }
    getListTrangThai(token) {
        return this.donHangService.getListTrangThai(token);
    }
    getVi(token) {
        return this.donHangService.getVi(token);
    }
    donHangChoXuLyByShop(token) {
        return this.donHangService.donHangChoXuLyByShop(token);
    }
};
exports.DonHangController = DonHangController;
__decorate([
    (0, common_1.Post)('/xac-nhan-don-hang'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_don_hang_dto_1.CreateDonHangDto]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/chi-tiet-don-hang-by-user/:uId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('uId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "chiTietDonHangByUser", null);
__decorate([
    (0, common_1.Delete)('huy-don-hang/:oId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('oId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "huyDonHang", null);
__decorate([
    (0, common_1.Get)('chi-tiet-don-hang-by-shop'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "chiTietDonHangByShop", null);
__decorate([
    (0, common_1.Get)('in-don-hang-by-shop/:oId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('oId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "inDonHangByShop", null);
__decorate([
    (0, common_1.Post)('cap-nhat-nguoi-giao'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_don_hang_dto_1.UpdateNguoiGiaoDto]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "capNhatNguoiGiao", null);
__decorate([
    (0, common_1.Post)('cap-nhat-thanh-toan'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_don_hang_dto_1.UpdateThanhToanDto]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "capNhatThanhToan", null);
__decorate([
    (0, common_1.Post)('sort-don-hang'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_don_hang_dto_1.SortDto]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "sortDonHang", null);
__decorate([
    (0, common_1.Get)('/get-list-trang-thai'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "getListTrangThai", null);
__decorate([
    (0, common_1.Get)('/get-vi'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "getVi", null);
__decorate([
    (0, common_1.Get)('/don-hang-cho-xu-ly'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonHangController.prototype, "donHangChoXuLyByShop", null);
exports.DonHangController = DonHangController = __decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, swagger_1.ApiTags)('donHang'),
    (0, common_1.Controller)('don-hang'),
    __metadata("design:paramtypes", [don_hang_service_1.DonHangService])
], DonHangController);
//# sourceMappingURL=don-hang.controller.js.map