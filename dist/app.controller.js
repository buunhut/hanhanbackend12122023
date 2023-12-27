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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const app_dto_1 = require("./app.dto");
const service_1 = require("./service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    uploadHinhDanhMuc(token, body, file) {
        return this.appService.uploadHinhDanhMuc(token, body, file);
    }
    deleteHinhDanhMuc(token, dmId) {
        return this.appService.deleteHinhDanhMuc(token, +dmId);
    }
    uploadHinhThuongHieu(token, body, file) {
        return this.appService.uploadHinhThuongHieu(token, body, file);
    }
    deleteHinhThuongHieu(token, thId) {
        return this.appService.deleteHinhThuongHieu(token, +thId);
    }
    uploadHinhSanPham(token, body, file) {
        return this.appService.uploadHinhSanPham(token, body, file);
    }
    deleteHinhSanPham(token, spId) {
        return this.appService.deleteHinhSanPham(token, +spId);
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Post)('/up-hinh-danh-muc'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/img',
            filename: (req, file, callback) => callback(null, new Date().getTime() + '_' + file.originalname),
        }),
    })),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.UploadDanhMucDto, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadHinhDanhMuc", null);
__decorate([
    (0, common_1.Delete)('xoa-hinh-danh-muc/:dmId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('dmId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteHinhDanhMuc", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Post)('/up-hinh-thuong-hieu'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/img',
            filename: (req, file, callback) => callback(null, new Date().getTime() + '_' + file.originalname),
        }),
    })),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.UploadThuongHieuDto, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadHinhThuongHieu", null);
__decorate([
    (0, common_1.Delete)('xoa-hinh-thuong-hieu/:thId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('thId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteHinhThuongHieu", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Post)('/up-hinh-san-pham'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('hinhAnh', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/img',
            filename: (req, file, callback) => callback(null, new Date().getTime() + '_' + file.originalname),
        }),
    })),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, app_dto_1.UploadSanPhamDto, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadHinhSanPham", null);
__decorate([
    (0, common_1.Delete)('xoa-hinh-san-pham/:spId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('spId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteHinhSanPham", null);
exports.AppController = AppController = __decorate([
    (0, common_1.UseGuards)(service_1.AuthGuard),
    (0, swagger_1.ApiTags)('upload'),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map