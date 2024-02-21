import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { usuariosController } from '../controllers/usuarioController';
import { validarToken } from '../middleware/auth';

class UsuariosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/verificarUsuario',validarToken, usuariosController.verificaUsuario);
        this.router.get('/',validarToken, usuariosController.list);
        this.router.get('/:id',validarToken, usuariosController.listOne);
        this.router.post('/',validarToken, usuariosController.create);
        this.router.delete('/delete/:id',validarToken, usuariosController.eliminar);
        this.router.put('/update/:id',validarToken, usuariosController.actualizar);
        this.router.post('/CambiarPassword',usuariosController.CambiarPassword);
        this.router.post('/excel',validarToken, usuariosController.createExcel);
    }

}
export const usuariosRoutes = new UsuariosRoutes();

export default usuariosRoutes.router;