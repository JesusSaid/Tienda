"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritosRoutes = void 0;
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class CarritosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', auth_1.validarToken, carritoController_1.carritosController.list);
        this.router.get('/total/:id', auth_1.validarToken, carritoController_1.carritosController.listTotal);
        this.router.post('/', auth_1.validarToken, carritoController_1.carritosController.create);
        this.router.delete('/delete/:id', auth_1.validarToken, carritoController_1.carritosController.eliminar);
    }
}
exports.carritosRoutes = new CarritosRoutes();
exports.default = exports.carritosRoutes.router;
