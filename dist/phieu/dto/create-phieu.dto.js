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
exports.SortPhieuDto = exports.TraNoMotPhieuDto = exports.LuuPhieuDto = exports.SuaDoiTacDto = exports.SuaChiTietDto = exports.CreatePhieuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePhieuDto {
}
exports.CreatePhieuDto = CreatePhieuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], CreatePhieuDto.prototype, "ngay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreatePhieuDto.prototype, "loaiPhieu", void 0);
class SuaChiTietDto {
}
exports.SuaChiTietDto = SuaChiTietDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], SuaChiTietDto.prototype, "dId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], SuaChiTietDto.prototype, "donGia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], SuaChiTietDto.prototype, "soLuong", void 0);
class SuaDoiTacDto {
}
exports.SuaDoiTacDto = SuaDoiTacDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], SuaDoiTacDto.prototype, "pId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], SuaDoiTacDto.prototype, "dtId", void 0);
class LuuPhieuDto {
}
exports.LuuPhieuDto = LuuPhieuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], LuuPhieuDto.prototype, "pId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], LuuPhieuDto.prototype, "soTien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], LuuPhieuDto.prototype, "thanhToan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], LuuPhieuDto.prototype, "ghiChu", void 0);
class TraNoMotPhieuDto {
}
exports.TraNoMotPhieuDto = TraNoMotPhieuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TraNoMotPhieuDto.prototype, "pId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TraNoMotPhieuDto.prototype, "thanhToan", void 0);
class SortPhieuDto {
}
exports.SortPhieuDto = SortPhieuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], SortPhieuDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], SortPhieuDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], SortPhieuDto.prototype, "dtId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], SortPhieuDto.prototype, "locNo", void 0);
//# sourceMappingURL=create-phieu.dto.js.map