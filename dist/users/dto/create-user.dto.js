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
exports.CheckThongTinDto = exports.CapNhatTienLiXiDto = exports.DangKyNhanLiXiDto = exports.DemLuotTruyCapDto = exports.DangNhapDto = exports.CheckSoDtUserDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "hoTen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "soDt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "matKhau", void 0);
class CheckSoDtUserDto {
}
exports.CheckSoDtUserDto = CheckSoDtUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CheckSoDtUserDto.prototype, "soDt", void 0);
class DangNhapDto {
}
exports.DangNhapDto = DangNhapDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangNhapDto.prototype, "soDt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangNhapDto.prototype, "matKhau", void 0);
class DemLuotTruyCapDto {
}
exports.DemLuotTruyCapDto = DemLuotTruyCapDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], DemLuotTruyCapDto.prototype, "ngay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DemLuotTruyCapDto.prototype, "soLuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DemLuotTruyCapDto.prototype, "diaChi", void 0);
class DangKyNhanLiXiDto {
}
exports.DangKyNhanLiXiDto = DangKyNhanLiXiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], DangKyNhanLiXiDto.prototype, "ngay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangKyNhanLiXiDto.prototype, "hoVaTen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangKyNhanLiXiDto.prototype, "soDienThoai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangKyNhanLiXiDto.prototype, "soTaiKhoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangKyNhanLiXiDto.prototype, "nganHang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], DangKyNhanLiXiDto.prototype, "liXi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], DangKyNhanLiXiDto.prototype, "loiChuc", void 0);
class CapNhatTienLiXiDto {
}
exports.CapNhatTienLiXiDto = CapNhatTienLiXiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CapNhatTienLiXiDto.prototype, "lxId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CapNhatTienLiXiDto.prototype, "liXi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CapNhatTienLiXiDto.prototype, "ghiChu", void 0);
class CheckThongTinDto {
}
exports.CheckThongTinDto = CheckThongTinDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CheckThongTinDto.prototype, "thongTin", void 0);
//# sourceMappingURL=create-user.dto.js.map