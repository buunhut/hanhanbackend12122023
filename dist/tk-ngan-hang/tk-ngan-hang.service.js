"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TkNganHangService = void 0;
const common_1 = require("@nestjs/common");
let TkNganHangService = class TkNganHangService {
    create(createTkNganHangDto) {
        return 'This action adds a new tkNganHang';
    }
    findAll() {
        return `This action returns all tkNganHang`;
    }
    findOne(id) {
        return `This action returns a #${id} tkNganHang`;
    }
    update(id, updateTkNganHangDto) {
        return `This action updates a #${id} tkNganHang`;
    }
    remove(id) {
        return `This action removes a #${id} tkNganHang`;
    }
};
exports.TkNganHangService = TkNganHangService;
exports.TkNganHangService = TkNganHangService = __decorate([
    (0, common_1.Injectable)()
], TkNganHangService);
//# sourceMappingURL=tk-ngan-hang.service.js.map