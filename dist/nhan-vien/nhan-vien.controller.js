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
exports.NhanVienController = void 0;
const common_1 = require("@nestjs/common");
const nhan_vien_service_1 = require("./nhan-vien.service");
const create_nhan_vien_dto_1 = require("./dto/create-nhan-vien.dto");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("../service");
let NhanVienController = class NhanVienController {
    constructor(nhanVienService) {
        this.nhanVienService = nhanVienService;
    }
    create(token) {
        return this.nhanVienService.create(token);
    }
    findAll(token) {
        return this.nhanVienService.findAll(token);
    }
    findOne(id) {
        return this.nhanVienService.findOne(+id);
    }
    update(token, body) {
        return this.nhanVienService.update(token, body);
    }
    delete(token, nvId) {
        return this.nhanVienService.delete(token, +nvId);
    }
};
exports.NhanVienController = NhanVienController;
__decorate([
    (0, common_1.Post)('tao-nhan-vien'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NhanVienController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-danh-sach-nhan-vien'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NhanVienController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NhanVienController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('cap-nhat-thong-tin-nhan-vien'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_nhan_vien_dto_1.UpdateNhanVienDto]),
    __metadata("design:returntype", void 0)
], NhanVienController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('xoa-nhan-vien/:nvId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('nvId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NhanVienController.prototype, "delete", null);
exports.NhanVienController = NhanVienController = __decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, swagger_1.ApiTags)('nhanVien'),
    (0, common_1.Controller)('nhan-vien'),
    __metadata("design:paramtypes", [nhan_vien_service_1.NhanVienService])
], NhanVienController);
//# sourceMappingURL=nhan-vien.controller.js.map