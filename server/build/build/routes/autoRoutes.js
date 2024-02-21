"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autosRoutes = void 0;
const express_1 = require("express");
const autoController_1 = require("../controllers/autoController");
class AutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id1', autoController_1.autosController.listOne);
        this.router.get('/', autoController_1.autosController.list);
        this.router.post('/', autoController_1.autosController.create);
        this.router.delete('/delete/:id', autoController_1.autosController.eliminar);
        this.router.put('/update/:id', autoController_1.autosController.actualizar);
    }
}
exports.autosRoutes = new AutosRoutes();
exports.default = exports.autosRoutes.router;
