import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { creditosController } from '../controllers/creditoController';
import { validarToken } from '../middleware/auth';

class CreditosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/verificarCredito/:id',validarToken, creditosController.verificaCredito);
        this.router.get('/',validarToken, creditosController.list);
        this.router.post('/',validarToken, creditosController.create);
    }
}
export const creditosRoutes = new CreditosRoutes();

export default creditosRoutes.router;