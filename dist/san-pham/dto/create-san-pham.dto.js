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
exports.UpdateMaxOrderDto = exports.UpdateQuyDoiDto = exports.UpdateDvtDto = exports.UpdatePhiVcDto = exports.UpdateGiaGiamDto = exports.UpdateGiaBanDto = exports.UpdateGiaNhapDto = exports.UpdateTenSpDto = exports.UpdateMaSpDto = exports.UpdateThuongHieuSanPhamDto = exports.UpdateDanhMucSanPhamDto = exports.CreateSanPhamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSanPhamDto {
}
exports.CreateSanPhamDto = CreateSanPhamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateSanPhamDto.prototype, "thId", void 0);
class UpdateDanhMucSanPhamDto {
}
exports.UpdateDanhMucSanPhamDto = UpdateDanhMucSanPhamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateDanhMucSanPhamDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateDanhMucSanPhamDto.prototype, "dmId", void 0);
class UpdateThuongHieuSanPhamDto {
}
exports.UpdateThuongHieuSanPhamDto = UpdateThuongHieuSanPhamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateThuongHieuSanPhamDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateThuongHieuSanPhamDto.prototype, "thId", void 0);
class UpdateMaSpDto {
}
exports.UpdateMaSpDto = UpdateMaSpDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateMaSpDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateMaSpDto.prototype, "maSp", void 0);
class UpdateTenSpDto {
}
exports.UpdateTenSpDto = UpdateTenSpDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateTenSpDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateTenSpDto.prototype, "tenSp", void 0);
class UpdateGiaNhapDto {
}
exports.UpdateGiaNhapDto = UpdateGiaNhapDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateGiaNhapDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateGiaNhapDto.prototype, "giaNhap", void 0);
class UpdateGiaBanDto {
}
exports.UpdateGiaBanDto = UpdateGiaBanDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateGiaBanDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateGiaBanDto.prototype, "giaBan", void 0);
class UpdateGiaGiamDto {
}
exports.UpdateGiaGiamDto = UpdateGiaGiamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateGiaGiamDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateGiaGiamDto.prototype, "giaGiam", void 0);
class UpdatePhiVcDto {
}
exports.UpdatePhiVcDto = UpdatePhiVcDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdatePhiVcDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdatePhiVcDto.prototype, "phiVc", void 0);
class UpdateDvtDto {
}
exports.UpdateDvtDto = UpdateDvtDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateDvtDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateDvtDto.prototype, "dvt", void 0);
class UpdateQuyDoiDto {
}
exports.UpdateQuyDoiDto = UpdateQuyDoiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateQuyDoiDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateQuyDoiDto.prototype, "quyDoi", void 0);
class UpdateMaxOrderDto {
}
exports.UpdateMaxOrderDto = UpdateMaxOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateMaxOrderDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateMaxOrderDto.prototype, "maxOrder", void 0);
//# sourceMappingURL=create-san-pham.dto.js.map