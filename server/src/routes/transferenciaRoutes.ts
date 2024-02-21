import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { transferenciasController } from '../controllers/transferenciaController';
import { validarToken } from '../middleware/auth';


class TransferenciasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/verificarTransferencia/:id',validarToken, transferenciasController.verificaTransferencia);
        this.router.get('/',validarToken, transferenciasController.list);
        this.router.post('/',validarToken, transferenciasController.create);
    }
}
export const transferenciasRoutes = new TransferenciasRoutes();

export default transferenciasRoutes.router;