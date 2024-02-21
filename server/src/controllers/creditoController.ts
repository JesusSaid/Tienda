import { Request, response, Response } from 'express';
import pool from '../database';
class CreditosController {
    public async verificaCredito(req: Request, res: Response): Promise<void> {
        //////console.log(req.body);
        const { id } = req.params;
        const consulta = `SELECT *
        FROM credito C
        JOIN usuarios U ON U.id = C.idUsuario
        WHERE U.id = "${id}"`;
        //////console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length == 0) {
            res.json(null);
        } else {
            res.json(respuesta[0])
        }
    }
    public async list(req: Request, res: Response): Promise<void> {
        //////console.log(req.params)
        const consulta = 'SELECT * FROM credito';
        //////console.log(consulta)
        const respuesta = await pool.query(consulta);
        //////console.log(respuesta);
        res.json(respuesta);

    }
    public async create(req: Request, res: Response): Promise<void> {
        //////console.log(req.body);
        const resp = await pool.query("INSERT INTO credito set ?",
            [req.body]);
        res.json(resp);
    }

}
export const creditosController = new CreditosController();