"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debitosRoutes = void 0;
const express_1 = require("express");
const debitoController_1 = require("../controllers/debitoController");
const auth_1 = require("../middleware/auth");
class DebitosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/verificardebito/:id', auth_1.validarToken, debitoController_1.debitosController.verificaDebito);
        this.router.get('/', auth_1.validarToken, debitoController_1.debitosController.list);
        this.router.post('/', auth_1.validarToken, debitoController_1.debitosController.create);
    }
}
exports.debitosRoutes = new DebitosRoutes();
exports.default = exports.debitosRoutes.router;
