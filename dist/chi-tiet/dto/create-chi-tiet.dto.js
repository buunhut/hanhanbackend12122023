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
exports.CreateChiTietDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateChiTietDto {
}
exports.CreateChiTietDto = CreateChiTietDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateChiTietDto.prototype, "pId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateChiTietDto.prototype, "spId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateChiTietDto.prototype, "tenSp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateChiTietDto.prototype, "dvt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateChiTietDto.prototype, "kId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateChiTietDto.prototype, "quyDoi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateChiTietDto.prototype, "soLuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], CreateChiTietDto.prototype, "donGia", void 0);
//# sourceMappingURL=create-chi-tiet.dto.js.map