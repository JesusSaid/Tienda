import { Request, response, Response } from 'express';
import pool from '../database';
class CarritosController {
    public async list(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //console.log(req.pasrams)
        const consulta = `SELECT C.id,V.marca,V.modelo,V.year,V.color,V.carroceria,V.descripcion,V.precio 
        FROM carrito C 
        JOIN vehiculos V ON V.id = C.idVehiculo 
        WHERE C.idUsuario = ${id};`;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async listTotal(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //console.log(req.params)
        const consulta = `SELECT SUM(c.total) AS carrito_total FROM carrito c WHERE c.idUsuario = ${id}`;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const resp = await pool.query("INSERT INTO carrito set ?",
            [req.body]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM carrito WHERE id = ${id}`);
        res.json(resp);
    }

}
export const carritosController = new CarritosController();