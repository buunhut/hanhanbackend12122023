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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getTatCaSanPham() {
        return this.usersService.getTatCaSanPham();
    }
    timKiemSanPham(keyword) {
        return this.usersService.timKiemSanPham(keyword);
    }
    getTatCaSanPhamByDanhMuc() {
        return this.usersService.getTatCaSanPhamByDanhMuc();
    }
    getTatCaSanPhamByThuongHieu() {
        return this.usersService.getTatCaSanPhamByThuongHieu();
    }
    dangKy(body) {
        return this.usersService.dangKy(body);
    }
    checkSoDt(body) {
        return this.usersService.checkSoDt(body);
    }
    dangNhap(body) {
        return this.usersService.dangNhap(body);
    }
    demLuotTruyCap(body) {
        return this.usersService.demLuotTruyCap(body);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('/get-tat-ca-san-pham'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getTatCaSanPham", null);
__decorate([
    (0, common_1.Get)('/tim-kiem-san-pham/:keyword'),
    __param(0, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "timKiemSanPham", null);
__decorate([
    (0, common_1.Get)('/get-tat-ca-san-pham-by-danh-muc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getTatCaSanPhamByDanhMuc", null);
__decorate([
    (0, common_1.Get)('/get-tat-ca-san-pham-by-thuong-hieu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getTatCaSanPhamByThuongHieu", null);
__decorate([
    (0, common_1.Post)('dang-ky'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "dangKy", null);
__decorate([
    (0, common_1.Post)('check-sodt'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CheckSoDtUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "checkSoDt", null);
__decorate([
    (0, common_1.Post)('dang-nhap'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.DangNhapDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "dangNhap", null);
__decorate([
    (0, common_1.Post)('dem-luot-truy-cap'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.DemLuotTruyCapDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "demLuotTruyCap", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map