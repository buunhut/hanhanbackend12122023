"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const jwt_1 = require("@nestjs/jwt");
const service_1 = require("./service");
const shops_controller_1 = require("./shops/shops.controller");
const chi_tiet_controller_1 = require("./chi-tiet/chi-tiet.controller");
const chi_tiet_don_hang_controller_1 = require("./chi-tiet-don-hang/chi-tiet-don-hang.controller");
const danh_muc_controller_1 = require("./danh-muc/danh-muc.controller");
const doi_tac_controller_1 = require("./doi-tac/doi-tac.controller");
const don_hang_controller_1 = require("./don-hang/don-hang.controller");
const kho_controller_1 = require("./kho/kho.controller");
const nhan_vien_controller_1 = require("./nhan-vien/nhan-vien.controller");
const phieu_controller_1 = require("./phieu/phieu.controller");
const san_pham_controller_1 = require("./san-pham/san-pham.controller");
const thuong_hieu_controller_1 = require("./thuong-hieu/thuong-hieu.controller");
const tk_ngan_hang_controller_1 = require("./tk-ngan-hang/tk-ngan-hang.controller");
const users_controller_1 = require("./users/users.controller");
const chi_tiet_service_1 = require("./chi-tiet/chi-tiet.service");
const chi_tiet_don_hang_service_1 = require("./chi-tiet-don-hang/chi-tiet-don-hang.service");
const danh_muc_service_1 = require("./danh-muc/danh-muc.service");
const doi_tac_service_1 = require("./doi-tac/doi-tac.service");
const don_hang_service_1 = require("./don-hang/don-hang.service");
const kho_service_1 = require("./kho/kho.service");
const nhan_vien_service_1 = require("./nhan-vien/nhan-vien.service");
const phieu_service_1 = require("./phieu/phieu.service");
const san_pham_service_1 = require("./san-pham/san-pham.service");
const shops_service_1 = require("./shops/shops.service");
const thuong_hieu_service_1 = require("./thuong-hieu/thuong-hieu.service");
const tk_ngan_hang_service_1 = require("./tk-ngan-hang/tk-ngan-hang.service");
const users_service_1 = require("./users/users.service");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: './.env',
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '365d' },
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            chi_tiet_controller_1.ChiTietController,
            chi_tiet_don_hang_controller_1.ChiTietDonHangController,
            danh_muc_controller_1.DanhMucController,
            doi_tac_controller_1.DoiTacController,
            don_hang_controller_1.DonHangController,
            kho_controller_1.KhoController,
            nhan_vien_controller_1.NhanVienController,
            phieu_controller_1.PhieuController,
            san_pham_controller_1.SanPhamController,
            shops_controller_1.ShopsController,
            thuong_hieu_controller_1.ThuongHieuController,
            tk_ngan_hang_controller_1.TkNganHangController,
            users_controller_1.UsersController,
        ],
        providers: [
            app_service_1.AppService,
            chi_tiet_service_1.ChiTietService,
            chi_tiet_don_hang_service_1.ChiTietDonHangService,
            danh_muc_service_1.DanhMucService,
            doi_tac_service_1.DoiTacService,
            don_hang_service_1.DonHangService,
            kho_service_1.KhoService,
            nhan_vien_service_1.NhanVienService,
            phieu_service_1.PhieuService,
            san_pham_service_1.SanPhamService,
            shops_service_1.ShopsService,
            thuong_hieu_service_1.ThuongHieuService,
            tk_ngan_hang_service_1.TkNganHangService,
            users_service_1.UsersService,
            service_1.ExtraService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map