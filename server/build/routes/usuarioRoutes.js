"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRoutes = void 0;
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
const auth_1 = require("../middleware/auth");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/verificarUsuario', auth_1.validarToken, usuarioController_1.usuariosController.verificaUsuario);
        this.router.get('/', auth_1.validarToken, usuarioController_1.usuariosController.list);
        this.router.get('/:id', auth_1.validarToken, usuarioController_1.usuariosController.listOne);
        this.router.post('/', auth_1.validarToken, usuarioController_1.usuariosController.create);
        this.router.delete('/delete/:id', auth_1.validarToken, usuarioController_1.usuariosController.eliminar);
        this.router.put('/update/:id', auth_1.validarToken, usuarioController_1.usuariosController.actualizar);
        this.router.post('/CambiarPassword', usuarioController_1.usuariosController.CambiarPassword);
        this.router.post('/excel', auth_1.validarToken, usuarioController_1.usuariosController.createExcel);
    }
}
exports.usuariosRoutes = new UsuariosRoutes();
exports.default = exports.usuariosRoutes.router;
