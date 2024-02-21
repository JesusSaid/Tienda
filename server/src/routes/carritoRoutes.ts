import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { carritosController } from '../controllers/carritoController';
import { validarToken } from '../middleware/auth';

class CarritosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/:id',validarToken, carritosController.list);
        this.router.get('/total/:id',validarToken, carritosController.listTotal);
        this.router.post('/',validarToken, carritosController.create);
        this.router.delete('/delete/:id',validarToken, carritosController.eliminar);
    }

}
export const carritosRoutes = new CarritosRoutes();

export default carritosRoutes.router;