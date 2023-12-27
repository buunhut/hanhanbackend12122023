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
exports.ChiTietController = void 0;
const common_1 = require("@nestjs/common");
const chi_tiet_service_1 = require("./chi-tiet.service");
const create_chi_tiet_dto_1 = require("./dto/create-chi-tiet.dto");
const swagger_1 = require("@nestjs/swagger");
let ChiTietController = class ChiTietController {
    constructor(chiTietService) {
        this.chiTietService = chiTietService;
    }
    create(token, body) {
        return this.chiTietService.create(token, body);
    }
    getChiTietNhap(token) {
        return this.chiTietService.getChiTietNhap(token);
    }
    timChiTietNhap(token, keyword) {
        return this.chiTietService.timChiTietNhap(token, keyword);
    }
    suaChiTietDaLuu(token, pId) {
        return this.chiTietService.suaChiTietDaLuu(token, +pId);
    }
    remove(token, dId) {
        return this.chiTietService.remove(token, +dId);
    }
};
exports.ChiTietController = ChiTietController;
__decorate([
    (0, common_1.Post)('/them-chi-tiet'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_chi_tiet_dto_1.CreateChiTietDto]),
    __metadata("design:returntype", void 0)
], ChiTietController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-chi-tiet-nhap'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChiTietController.prototype, "getChiTietNhap", null);
__decorate([
    (0, common_1.Get)('/tim-chi-tiet-nhap/:keyword'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChiTietController.prototype, "timChiTietNhap", null);
__decorate([
    (0, common_1.Put)('sua-chi-tiet-da-luu/:pId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('pId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ChiTietController.prototype, "suaChiTietDaLuu", null);
__decorate([
    (0, common_1.Delete)('xoa-chi-tiet/:dId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('dId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ChiTietController.prototype, "remove", null);
exports.ChiTietController = ChiTietController = __decorate([
    (0, swagger_1.ApiTags)('chiTiet'),
    (0, common_1.Controller)('chi-tiet'),
    __metadata("design:paramtypes", [chi_tiet_service_1.ChiTietService])
], ChiTietController);
//# sourceMappingURL=chi-tiet.controller.js.map