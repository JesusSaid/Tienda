import { Request, response, Response } from 'express';
import pool from '../database';
class FormapagosController {
    public async list(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = 'SELECT * FROM forma_pago';
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }

}
export const formapagosController = new FormapagosController();