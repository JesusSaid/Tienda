"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriasRoutes = void 0;
const express_1 = require("express");
const categoriasController_1 = require("../controllers/categoriasController");
const auth_1 = require("../middleware/auth");
class CategoriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, categoriasController_1.categoriasController.list);
    }
}
exports.categoriasRoutes = new CategoriasRoutes();
exports.default = exports.categoriasRoutes.router;
