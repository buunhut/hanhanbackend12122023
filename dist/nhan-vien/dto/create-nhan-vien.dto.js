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
exports.UpdateNhanVienDto = exports.CreateNhanVienDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateNhanVienDto {
}
exports.CreateNhanVienDto = CreateNhanVienDto;
class UpdateNhanVienDto {
}
exports.UpdateNhanVienDto = UpdateNhanVienDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateNhanVienDto.prototype, "nvId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateNhanVienDto.prototype, "tenNhanVien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateNhanVienDto.prototype, "soDt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateNhanVienDto.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], UpdateNhanVienDto.prototype, "chucVu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateNhanVienDto.prototype, "mucLuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateNhanVienDto.prototype, "sId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], UpdateNhanVienDto.prototype, "sta", void 0);
//# sourceMappingURL=create-nhan-vien.dto.js.map