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
exports.ChiTietDonHangController = void 0;
const common_1 = require("@nestjs/common");
const chi_tiet_don_hang_service_1 = require("./chi-tiet-don-hang.service");
const create_chi_tiet_don_hang_dto_1 = require("./dto/create-chi-tiet-don-hang.dto");
const update_chi_tiet_don_hang_dto_1 = require("./dto/update-chi-tiet-don-hang.dto");
const swagger_1 = require("@nestjs/swagger");
let ChiTietDonHangController = class ChiTietDonHangController {
    constructor(chiTietDonHangService) {
        this.chiTietDonHangService = chiTietDonHangService;
    }
    create(createChiTietDonHangDto) {
        return this.chiTietDonHangService.create(createChiTietDonHangDto);
    }
    findAll() {
        return this.chiTietDonHangService.findAll();
    }
    findOne(id) {
        return this.chiTietDonHangService.findOne(+id);
    }
    update(id, updateChiTietDonHangDto) {
        return this.chiTietDonHangService.update(+id, updateChiTietDonHangDto);
    }
    remove(id) {
        return this.chiTietDonHangService.remove(+id);
    }
};
exports.ChiTietDonHangController = ChiTietDonHangController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chi_tiet_don_hang_dto_1.CreateChiTietDonHangDto]),
    __metadata("design:returntype", void 0)
], ChiTietDonHangController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChiTietDonHangController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChiTietDonHangController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chi_tiet_don_hang_dto_1.UpdateChiTietDonHangDto]),
    __metadata("design:returntype", void 0)
], ChiTietDonHangController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChiTietDonHangController.prototype, "remove", null);
exports.ChiTietDonHangController = ChiTietDonHangController = __decorate([
    (0, swagger_1.ApiTags)('chiTietDonHang'),
    (0, common_1.Controller)('chi-tiet-don-hang'),
    __metadata("design:paramtypes", [chi_tiet_don_hang_service_1.ChiTietDonHangService])
], ChiTietDonHangController);
//# sourceMappingURL=chi-tiet-don-hang.controller.js.map