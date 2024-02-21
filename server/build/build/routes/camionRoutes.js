"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camionesRoutes = void 0;
const express_1 = require("express");
const camionController_1 = require("../controllers/camionController");
class CamionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id1', camionController_1.camionesController.listOne);
        this.router.get('/', camionController_1.camionesController.list);
        this.router.post('/', camionController_1.camionesController.create);
        this.router.delete('/delete/:id', camionController_1.camionesController.eliminar);
        this.router.put('/update/:id', camionController_1.camionesController.actualizar);
    }
}
exports.camionesRoutes = new CamionesRoutes();
exports.default = exports.camionesRoutes.router;
