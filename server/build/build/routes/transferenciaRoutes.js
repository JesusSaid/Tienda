"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferenciasRoutes = void 0;
const express_1 = require("express");
const transferenciaController_1 = require("../controllers/transferenciaController");
const auth_1 = require("../middleware/auth");
class TransferenciasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/verificarTransferencia/:id', auth_1.validarToken, transferenciaController_1.transferenciasController.verificaTransferencia);
        this.router.get('/', auth_1.validarToken, transferenciaController_1.transferenciasController.list);
        this.router.post('/', auth_1.validarToken, transferenciaController_1.transferenciasController.create);
    }
}
exports.transferenciasRoutes = new TransferenciasRoutes();
exports.default = exports.transferenciasRoutes.router;
