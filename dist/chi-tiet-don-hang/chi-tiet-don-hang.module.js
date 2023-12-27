"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiTietDonHangModule = void 0;
const common_1 = require("@nestjs/common");
const chi_tiet_don_hang_service_1 = require("./chi-tiet-don-hang.service");
const chi_tiet_don_hang_controller_1 = require("./chi-tiet-don-hang.controller");
let ChiTietDonHangModule = class ChiTietDonHangModule {
};
exports.ChiTietDonHangModule = ChiTietDonHangModule;
exports.ChiTietDonHangModule = ChiTietDonHangModule = __decorate([
    (0, common_1.Module)({
        controllers: [chi_tiet_don_hang_controller_1.ChiTietDonHangController],
        providers: [chi_tiet_don_hang_service_1.ChiTietDonHangService],
    })
], ChiTietDonHangModule);
//# sourceMappingURL=chi-tiet-don-hang.module.js.map