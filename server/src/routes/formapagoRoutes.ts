import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { formapagosController } from '../controllers/formapagoController';
import { validarToken } from '../middleware/auth';

class FormapagosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',validarToken, formapagosController.list);
    }

}
export const formapagosRoutes = new FormapagosRoutes();

export default formapagosRoutes.router;