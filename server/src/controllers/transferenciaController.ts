import { Request, response, Response } from 'express';
import pool from '../database';
class TransferenciasController {
    public async verificaTransferencia(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const { id } = req.params;
        const consulta = `SELECT *
        FROM transferencia T
        JOIN usuarios U ON U.id = T.idUsuario
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
        const consulta = 'SELECT * FROM transferencia';
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const resp = await pool.query("INSERT INTO transferencia set ?",
            [req.body]);
        res.json(resp);
    }

}
export const transferenciasController = new TransferenciasController();