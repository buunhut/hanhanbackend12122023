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
exports.DoiTacController = void 0;
const common_1 = require("@nestjs/common");
const doi_tac_service_1 = require("./doi-tac.service");
const create_doi_tac_dto_1 = require("./dto/create-doi-tac.dto");
const swagger_1 = require("@nestjs/swagger");
let DoiTacController = class DoiTacController {
    constructor(doiTacService) {
        this.doiTacService = doiTacService;
    }
    create(token, body) {
        return this.doiTacService.create(token, body);
    }
    findNpp(token) {
        return this.doiTacService.findNpp(token);
    }
    findKh(token) {
        return this.doiTacService.findKh(token);
    }
    updateNpp(token, body) {
        return this.doiTacService.updateNpp(token, body);
    }
    updateKh(token, body) {
        return this.doiTacService.updateKh(token, body);
    }
    searchNpp(token, keyword) {
        return this.doiTacService.searchNpp(token, keyword);
    }
    searchKh(token, keyword) {
        return this.doiTacService.searchKh(token, keyword);
    }
    remove(token, dtId) {
        return this.doiTacService.remove(token, +dtId);
    }
};
exports.DoiTacController = DoiTacController;
__decorate([
    (0, common_1.Post)('/tao-doi-tac'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_doi_tac_dto_1.CreateDoiTacDto]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-npp'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "findNpp", null);
__decorate([
    (0, common_1.Get)('/get-khach-hang'),
    __param(0, (0, common_1.Headers)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "findKh", null);
__decorate([
    (0, common_1.Put)('/cap-nhat-npp'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_doi_tac_dto_1.UpdateDoiTacDto]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "updateNpp", null);
__decorate([
    (0, common_1.Put)('/cap-nhat-khach-hang'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_doi_tac_dto_1.UpdateDoiTacDto]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "updateKh", null);
__decorate([
    (0, common_1.Get)('tim-npp/:keyword'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "searchNpp", null);
__decorate([
    (0, common_1.Get)('tim-khach-hang/:keyword'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "searchKh", null);
__decorate([
    (0, common_1.Delete)('/xoa-doi-tac/:dtId'),
    __param(0, (0, common_1.Headers)('token')),
    __param(1, (0, common_1.Param)('dtId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], DoiTacController.prototype, "remove", null);
exports.DoiTacController = DoiTacController = __decorate([
    (0, swagger_1.ApiTags)('doiTac'),
    (0, common_1.Controller)('doi-tac'),
    __metadata("design:paramtypes", [doi_tac_service_1.DoiTacService])
], DoiTacController);
//# sourceMappingURL=doi-tac.controller.js.map