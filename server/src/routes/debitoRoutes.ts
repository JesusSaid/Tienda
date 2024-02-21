import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { debitosController } from '../controllers/debitoController';
import { validarToken } from '../middleware/auth';

class DebitosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/verificardebito/:id',validarToken, debitosController.verificaDebito);
        this.router.get('/',validarToken, debitosController.list);
        this.router.post('/',validarToken, debitosController.create);
    }
}
export const debitosRoutes = new DebitosRoutes();

export default debitosRoutes.router;