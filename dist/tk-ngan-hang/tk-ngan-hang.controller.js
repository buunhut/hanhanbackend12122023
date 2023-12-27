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
exports.TkNganHangController = void 0;
const common_1 = require("@nestjs/common");
const tk_ngan_hang_service_1 = require("./tk-ngan-hang.service");
const create_tk_ngan_hang_dto_1 = require("./dto/create-tk-ngan-hang.dto");
const update_tk_ngan_hang_dto_1 = require("./dto/update-tk-ngan-hang.dto");
const swagger_1 = require("@nestjs/swagger");
let TkNganHangController = class TkNganHangController {
    constructor(tkNganHangService) {
        this.tkNganHangService = tkNganHangService;
    }
    create(createTkNganHangDto) {
        return this.tkNganHangService.create(createTkNganHangDto);
    }
    findAll() {
        return this.tkNganHangService.findAll();
    }
    findOne(id) {
        return this.tkNganHangService.findOne(+id);
    }
    update(id, updateTkNganHangDto) {
        return this.tkNganHangService.update(+id, updateTkNganHangDto);
    }
    remove(id) {
        return this.tkNganHangService.remove(+id);
    }
};
exports.TkNganHangController = TkNganHangController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tk_ngan_hang_dto_1.CreateTkNganHangDto]),
    __metadata("design:returntype", void 0)
], TkNganHangController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TkNganHangController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TkNganHangController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tk_ngan_hang_dto_1.UpdateTkNganHangDto]),
    __metadata("design:returntype", void 0)
], TkNganHangController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TkNganHangController.prototype, "remove", null);
exports.TkNganHangController = TkNganHangController = __decorate([
    (0, swagger_1.ApiTags)('tkNganHang'),
    (0, common_1.Controller)('tk-ngan-hang'),
    __metadata("design:paramtypes", [tk_ngan_hang_service_1.TkNganHangService])
], TkNganHangController);
//# sourceMappingURL=tk-ngan-hang.controller.js.map