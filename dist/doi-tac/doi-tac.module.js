"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoiTacModule = void 0;
const common_1 = require("@nestjs/common");
const doi_tac_service_1 = require("./doi-tac.service");
const doi_tac_controller_1 = require("./doi-tac.controller");
let DoiTacModule = class DoiTacModule {
};
exports.DoiTacModule = DoiTacModule;
exports.DoiTacModule = DoiTacModule = __decorate([
    (0, common_1.Module)({
        controllers: [doi_tac_controller_1.DoiTacController],
        providers: [doi_tac_service_1.DoiTacService],
    })
], DoiTacModule);
//# sourceMappingURL=doi-tac.module.js.map