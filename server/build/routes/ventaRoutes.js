"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasRoutes = void 0;
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
const auth_1 = require("../middleware/auth");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, ventaController_1.ventasController.list);
        this.router.get('/list2', auth_1.validarToken, ventaController_1.ventasController.list2);
        this.router.post('/crearVenta', auth_1.validarToken, ventaController_1.ventasController.create);
    }
}
exports.ventasRoutes = new VentasRoutes();
exports.default = exports.ventasRoutes.router;
