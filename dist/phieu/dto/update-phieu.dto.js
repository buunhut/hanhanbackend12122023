"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhieuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_phieu_dto_1 = require("./create-phieu.dto");
class UpdatePhieuDto extends (0, swagger_1.PartialType)(create_phieu_dto_1.CreatePhieuDto) {
}
exports.UpdatePhieuDto = UpdatePhieuDto;
//# sourceMappingURL=update-phieu.dto.js.map