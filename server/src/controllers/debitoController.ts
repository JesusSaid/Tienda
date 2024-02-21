import { Request, response, Response } from 'express';
import pool from '../database';
class DebitosController {
    public async verificaDebito(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const { id } = req.params;
        const consulta = `SELECT *
        FROM debito D
        JOIN usuarios U ON U.id = D.idUsuario
        WHERE U.id = "${id}"`;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length == 0) {
            res.json(null);
        } else {
            res.json(respuesta[0])
        }
    }
    public async list(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = 'SELECT * FROM debito';
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const resp = await pool.query("INSERT INTO debito set ?",
            [req.body]);
        res.json(resp);
    }

}
export const debitosController = new DebitosController();