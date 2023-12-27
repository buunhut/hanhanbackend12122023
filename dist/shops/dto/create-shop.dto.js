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
exports.TaoCauHinhDto = exports.ShopLoginDto = exports.CreateShopDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateShopDto {
}
exports.CreateShopDto = CreateShopDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "taiKhoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "matKhau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "tenShop", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "soDt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "nguoiLienHe", void 0);
class ShopLoginDto {
}
exports.ShopLoginDto = ShopLoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], ShopLoginDto.prototype, "taiKhoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], ShopLoginDto.prototype, "matKhau", void 0);
class TaoCauHinhDto {
}
exports.TaoCauHinhDto = TaoCauHinhDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TaoCauHinhDto.prototype, "mienPhiVc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TaoCauHinhDto.prototype, "phiVc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TaoCauHinhDto.prototype, "hoanTien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TaoCauHinhDto.prototype, "mucHoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number' }),
    __metadata("design:type", Number)
], TaoCauHinhDto.prototype, "sId", void 0);
//# sourceMappingURL=create-shop.dto.js.map