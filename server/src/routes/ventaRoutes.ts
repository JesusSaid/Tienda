import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { ventasController } from '../controllers/ventaController';
import { validarToken } from '../middleware/auth';

class VentasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',validarToken, ventasController.list);
        this.router.get('/list2',validarToken,ventasController.list2);
        this.router.post('/crearVenta',validarToken, ventasController.create);
    }

}
export const ventasRoutes = new VentasRoutes();

export default ventasRoutes.router;