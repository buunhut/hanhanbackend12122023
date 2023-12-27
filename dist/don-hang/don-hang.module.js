"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonHangModule = void 0;
const common_1 = require("@nestjs/common");
const don_hang_service_1 = require("./don-hang.service");
const don_hang_controller_1 = require("./don-hang.controller");
let DonHangModule = class DonHangModule {
};
exports.DonHangModule = DonHangModule;
exports.DonHangModule = DonHangModule = __decorate([
    (0, common_1.Module)({
        controllers: [don_hang_controller_1.DonHangController],
        providers: [don_hang_service_1.DonHangService],
    })
], DonHangModule);
//# sourceMappingURL=don-hang.module.js.map