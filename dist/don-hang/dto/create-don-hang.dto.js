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
exports.SortDto = exports.UpdateThanhToanDto = exports.UpdateNguoiGiaoDto = exports.CreateDonHangDto = exports.chiTietDonHangDto = exports.DonHangDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DonHangDto {
}
exports.DonHangDto = DonHangDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DonHangDto.prototype, "uId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DonHangDto.prototype, "sId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DonHangDto.prototype, "tienHang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DonHangDto.prototype, "traVi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DonHangDto.prototype, "phiVc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DonHangDto.prototype, "diemTichLuy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DonHangDto.prototype, "ghiChu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DonHangDto.prototype, "trangThai", void 0);
class chiTietDonHangDto {
}
exports.chiTietDonHangDto = chiTietDonHangDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], chiTietDonHangDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], chiTietDonHangDto.prototype, "tenSp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], chiTietDonHangDto.prototype, "dvt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], chiTietDonHangDto.prototype, "soLuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], chiTietDonHangDto.prototype, "kId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], chiTietDonHangDto.prototype, "quyDoi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], chiTietDonHangDto.prototype, "donGia", void 0);
class CreateDonHangDto {
}
exports.CreateDonHangDto = CreateDonHangDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: DonHangDto }),
    __metadata("design:type", DonHangDto)
], CreateDonHangDto.prototype, "donHang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [chiTietDonHangDto] }),
    __metadata("design:type", Array)
], CreateDonHangDto.prototype, "chiTietDonHang", void 0);
class UpdateNguoiGiaoDto {
}
exports.UpdateNguoiGiaoDto = UpdateNguoiGiaoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateNguoiGiaoDto.prototype, "oId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateNguoiGiaoDto.prototype, "nguoiGiao", void 0);
class UpdateThanhToanDto {
}
exports.UpdateThanhToanDto = UpdateThanhToanDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateThanhToanDto.prototype, "oId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateThanhToanDto.prototype, "thanhToan", void 0);
class SortDto {
}
exports.SortDto = SortDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], SortDto.prototype, "trangThai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], SortDto.prototype, "nguoiGiao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], SortDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], SortDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], SortDto.prototype, "keyword", void 0);
//# sourceMappingURL=create-don-hang.dto.js.map