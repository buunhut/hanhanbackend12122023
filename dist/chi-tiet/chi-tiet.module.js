"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiTietModule = void 0;
const common_1 = require("@nestjs/common");
const chi_tiet_service_1 = require("./chi-tiet.service");
const chi_tiet_controller_1 = require("./chi-tiet.controller");
let ChiTietModule = class ChiTietModule {
};
exports.ChiTietModule = ChiTietModule;
exports.ChiTietModule = ChiTietModule = __decorate([
    (0, common_1.Module)({
        controllers: [chi_tiet_controller_1.ChiTietController],
        providers: [chi_tiet_service_1.ChiTietService],
    })
], ChiTietModule);
//# sourceMappingURL=chi-tiet.module.js.map