"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formapagosRoutes = void 0;
const express_1 = require("express");
const formapagoController_1 = require("../controllers/formapagoController");
const auth_1 = require("../middleware/auth");
class FormapagosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, formapagoController_1.formapagosController.list);
    }
}
exports.formapagosRoutes = new FormapagosRoutes();
exports.default = exports.formapagosRoutes.router;
