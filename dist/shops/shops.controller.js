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
exports.ShopsController = void 0;
const common_1 = require("@nestjs/common");
const shops_service_1 = require("./shops.service");
const create_shop_dto_1 = require("./dto/create-shop.dto");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("../service");
let ShopsController = class ShopsController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    create(body) {
        return this.shopsService.create(body);
    }
    login(body) {
        return this.shopsService.login(body);
    }
    taoCauHinh(token, body) {
        return this.shopsService.taoCauHinh(token, body);
    }
    tatMoShop(token) {
        return this.shopsService.tatMoShop(token);
    }
    getCauHinh(sId) {
        return this.shopsService.getCauHinh(+sId);
    }
};
exports.ShopsController = ShopsController;
__decorate([
    (0, common_1.Post)('/dang-ky'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_dto_1.CreateShopDto]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/dang-nhap'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_dto_1.ShopLoginDto]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, common_1.Post)('/tao-cau-hinh'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_shop_dto_1.TaoCauHinhDto]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "taoCauHinh", null);
__decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, common_1.Post)('/tat-mo-shop'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "tatMoShop", null);
__decorate([
    (0, common_1.Get)('/get-cau-hinh/:sId'),
    __param(0, (0, common_1.Param)('sId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "getCauHinh", null);
exports.ShopsController = ShopsController = __decorate([
    (0, swagger_1.ApiTags)('shops'),
    (0, common_1.Controller)('shops'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ShopsController);
//# sourceMappingURL=shops.controller.js.map