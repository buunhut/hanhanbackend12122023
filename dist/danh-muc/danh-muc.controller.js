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
exports.DanhMucController = void 0;
const common_1 = require("@nestjs/common");
const danh_muc_service_1 = require("./danh-muc.service");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("../service");
const create_danh_muc_dto_1 = require("./dto/create-danh-muc.dto");
let DanhMucController = class DanhMucController {
    constructor(danhMucService) {
        this.danhMucService = danhMucService;
    }
    read(token) {
        return this.danhMucService.read(token);
    }
    create(token) {
        return this.danhMucService.create(token);
    }
    update(token, body) {
        return this.danhMucService.update(token, body);
    }
    delete(token, dmId) {
        return this.danhMucService.delete(token, +dmId);
    }
    search(token, keyword) {
        return this.danhMucService.search(token, keyword);
    }
};
exports.DanhMucController = DanhMucController;
__decorate([
    (0, common_1.Get)('/get-danh-muc'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DanhMucController.prototype, "read", null);
__decorate([
    (0, common_1.Post)('/tao-danh-muc'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DanhMucController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/cap-nhat-danh-muc'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_danh_muc_dto_1.UpdateDanhMucDto]),
    __metadata("design:returntype", void 0)
], DanhMucController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('xoa-danh-muc/:dmId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('dmId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], DanhMucController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('tim-danh-muc/:keyword'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DanhMucController.prototype, "search", null);
exports.DanhMucController = DanhMucController = __decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, swagger_1.ApiTags)('danhMuc'),
    (0, common_1.Controller)('danh-muc'),
    __metadata("design:paramtypes", [danh_muc_service_1.DanhMucService])
], DanhMucController);
//# sourceMappingURL=danh-muc.controller.js.map