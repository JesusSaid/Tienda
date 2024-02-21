"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camionetasRoutes = void 0;
const express_1 = require("express");
const camionetaController_1 = require("../controllers/camionetaController");
class CamionetasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id1', camionetaController_1.camionetasController.listOne);
        this.router.get('/', camionetaController_1.camionetasController.list);
        this.router.post('/', camionetaController_1.camionetasController.create);
        this.router.delete('/delete/:id', camionetaController_1.camionetasController.eliminar);
        this.router.put('/update/:id', camionetaController_1.camionetasController.actualizar);
    }
}
exports.camionetasRoutes = new CamionetasRoutes();
exports.default = exports.camionetasRoutes.router;
