import { Request, Response } from 'express';
import pool from '../database';
class CategoriasController {
    public async list(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = 'SELECT * FROM categorias';
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);


    }
}
export const categoriasController = new CategoriasController();

