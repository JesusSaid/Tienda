import { Request, Response } from 'express';
import pool from '../database';
import { Router } from 'express';
import { vehiculoController } from '../controllers/vehiculoController';
import { validarToken } from '../middleware/auth';

class VehiculoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/:id1',validarToken, vehiculoController.listOne);
        this.router.get('/categoria/:id2',validarToken, vehiculoController.list2);
        this.router.get('/',validarToken, vehiculoController.list);
        this.router.get('/admin',validarToken, vehiculoController.listAdmin);
        this.router.post('/',validarToken, vehiculoController.create);
        this.router.post('/excel',validarToken, vehiculoController.createExcel);
        this.router.delete('/delete/:id',validarToken, vehiculoController.eliminar);
        this.router.put('/update/:id',validarToken, vehiculoController.actualizar);
    }
}
export const vehiculoRoutes = new VehiculoRoutes();

export default vehiculoRoutes.router;