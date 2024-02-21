"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motosRoutes = void 0;
const express_1 = require("express");
const motoController_1 = require("../controllers/motoController");
class MotosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id1', motoController_1.motosController.listOne);
        this.router.get('/', motoController_1.motosController.list);
        this.router.post('/', motoController_1.motosController.create);
        this.router.delete('/delete/:id', motoController_1.motosController.eliminar);
        this.router.put('/update/:id', motoController_1.motosController.actualizar);
    }
}
exports.motosRoutes = new MotosRoutes();
exports.default = exports.motosRoutes.router;
