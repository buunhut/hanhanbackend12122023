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
exports.UploadSanPhamDto = exports.UploadThuongHieuDto = exports.UploadDanhMucDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UploadDanhMucDto {
}
exports.UploadDanhMucDto = UploadDanhMucDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UploadDanhMucDto.prototype, "dmId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], UploadDanhMucDto.prototype, "hinhAnh", void 0);
class UploadThuongHieuDto {
}
exports.UploadThuongHieuDto = UploadThuongHieuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UploadThuongHieuDto.prototype, "thId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], UploadThuongHieuDto.prototype, "hinhAnh", void 0);
class UploadSanPhamDto {
}
exports.UploadSanPhamDto = UploadSanPhamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UploadSanPhamDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], UploadSanPhamDto.prototype, "hinhAnh", void 0);
//# sourceMappingURL=app.dto.js.map