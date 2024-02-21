"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculoRoutes = void 0;
const express_1 = require("express");
const vehiculoController_1 = require("../controllers/vehiculoController");
const auth_1 = require("../middleware/auth");
class VehiculoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id1', auth_1.validarToken, vehiculoController_1.vehiculoController.listOne);
        this.router.get('/categoria/:id2', auth_1.validarToken, vehiculoController_1.vehiculoController.list2);
        this.router.get('/', auth_1.validarToken, vehiculoController_1.vehiculoController.list);
        this.router.get('/admin', auth_1.validarToken, vehiculoController_1.vehiculoController.listAdmin);
        this.router.post('/', auth_1.validarToken, vehiculoController_1.vehiculoController.create);
        this.router.post('/excel', auth_1.validarToken, vehiculoController_1.vehiculoController.createExcel);
        this.router.delete('/delete/:id', auth_1.validarToken, vehiculoController_1.vehiculoController.eliminar);
        this.router.put('/update/:id', auth_1.validarToken, vehiculoController_1.vehiculoController.actualizar);
    }
}
exports.vehiculoRoutes = new VehiculoRoutes();
exports.default = exports.vehiculoRoutes.router;
