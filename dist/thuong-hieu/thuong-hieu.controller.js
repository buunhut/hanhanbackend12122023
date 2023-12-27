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
exports.ThuongHieuController = void 0;
const common_1 = require("@nestjs/common");
const thuong_hieu_service_1 = require("./thuong-hieu.service");
const swagger_1 = require("@nestjs/swagger");
const create_thuong_hieu_dto_1 = require("./dto/create-thuong-hieu.dto");
let ThuongHieuController = class ThuongHieuController {
    constructor(thuongHieuService) {
        this.thuongHieuService = thuongHieuService;
    }
    read(token) {
        return this.thuongHieuService.read(token);
    }
    create(token, body) {
        return this.thuongHieuService.create(token, body);
    }
    update(token, body) {
        return this.thuongHieuService.update(token, body);
    }
    delete(token, thId) {
        return this.thuongHieuService.delete(token, +thId);
    }
    search(token, keyword) {
        return this.thuongHieuService.search(token, keyword);
    }
};
exports.ThuongHieuController = ThuongHieuController;
__decorate([
    (0, common_1.Get)('/get-thuong-hieu'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThuongHieuController.prototype, "read", null);
__decorate([
    (0, common_1.Post)('/tao-thuong-hieu'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_thuong_hieu_dto_1.CreateThuongHieuDto]),
    __metadata("design:returntype", void 0)
], ThuongHieuController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/cap-nhat-thuong-hieu'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_thuong_hieu_dto_1.UpdateThuongHieuDto]),
    __metadata("design:returntype", void 0)
], ThuongHieuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('xoa-thuong-hieu/:thId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('thId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ThuongHieuController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('tim-thuong-hieu/:keyword'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ThuongHieuController.prototype, "search", null);
exports.ThuongHieuController = ThuongHieuController = __decorate([
    (0, swagger_1.ApiTags)('thuongHieu'),
    (0, common_1.Controller)('thuong-hieu'),
    __metadata("design:paramtypes", [thuong_hieu_service_1.ThuongHieuService])
], ThuongHieuController);
//# sourceMappingURL=thuong-hieu.controller.js.map