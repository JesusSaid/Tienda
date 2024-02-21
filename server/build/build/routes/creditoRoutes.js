"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditosRoutes = void 0;
const express_1 = require("express");
const creditoController_1 = require("../controllers/creditoController");
const auth_1 = require("../middleware/auth");
class CreditosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/verificarCredito/:id', auth_1.validarToken, creditoController_1.creditosController.verificaCredito);
        this.router.get('/', auth_1.validarToken, creditoController_1.creditosController.list);
        this.router.post('/', auth_1.validarToken, creditoController_1.creditosController.create);
    }
}
exports.creditosRoutes = new CreditosRoutes();
exports.default = exports.creditosRoutes.router;
