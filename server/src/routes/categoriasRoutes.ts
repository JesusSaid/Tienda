import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { categoriasController } from '../controllers/categoriasController';
import { validarToken } from '../middleware/auth';

class CategoriasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',validarToken, categoriasController.list);
    }

}
export const categoriasRoutes = new CategoriasRoutes();

export default categoriasRoutes.router;