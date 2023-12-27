"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhMucModule = void 0;
const common_1 = require("@nestjs/common");
const danh_muc_service_1 = require("./danh-muc.service");
const danh_muc_controller_1 = require("./danh-muc.controller");
const service_1 = require("../service");
let DanhMucModule = class DanhMucModule {
};
exports.DanhMucModule = DanhMucModule;
exports.DanhMucModule = DanhMucModule = __decorate([
    (0, common_1.Module)({
        controllers: [danh_muc_controller_1.DanhMucController],
        providers: [danh_muc_service_1.DanhMucService, service_1.ExtraService],
    })
], DanhMucModule);
//# sourceMappingURL=danh-muc.module.js.map