import { Request, response, Response } from 'express';
import pool from '../database';
class VehiculoController {
    public async listOne(req: Request, res: Response): Promise<void> {
        ////console.log(req.params);
        const { id1 } = req.params;
        //const consulta = 'SELECT V.* , C.nombre as nombreCategoria FROM vehiculos V INNER JOIN categorias C on V.categoria = C.nombre';
        const consulta = 'SELECT * FROM vehiculos WHERE id = ' + id1;
        ////console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'vehiculo no encontrado' });
    }
    public async list(req: Request, res: Response): Promise<void> {
        ////console.log(req.params)
        const consulta = `SELECT V.* , C.nombre as nombreCategoria
        FROM vehiculos V
        INNER JOIN categorias C on V.categoria = C.id
        WHERE V.cantidad > 0;`;
        ////console.log(consulta)
        const respuesta = await pool.query(consulta);
        ////console.log(respuesta);
        res.json(respuesta);

    }
    public async listAdmin(req: Request, res: Response): Promise<void> {
        ////console.log(req.params)
        const consulta = `SELECT V.* , C.nombre as nombreCategoria
        FROM vehiculos V
        INNER JOIN categorias C on V.categoria = C.id;`;
        ////console.log(consulta)
        const respuesta = await pool.query(consulta);
        ////console.log(respuesta);
        res.json(respuesta);

    }
    public async list2(req: Request, res: Response): Promise<void> {
        ////console.log(req.params);
        const { id2 } = req.params;
        const consulta = `SELECT V.*, C.nombre AS nombreCategoria
        FROM vehiculos V
        INNER JOIN categorias C ON V.categoria = C.id
        WHERE V.categoria = '${id2}' AND V.cantidad > 0`;
        ////console.log(consulta)
        const respuesta = await pool.query(consulta);
        ////console.log(respuesta);
        res.json(respuesta);
    }
    public async nameCategoria(req: Request, res: Response): Promise<void> {
        //////console.log(req.params)
        const consulta = 'SELECT V.* , C.nombre as nombreCategoria FROM vehiculos V INNER JOIN categorias C on V.categoria = C.nombre';
        //////console.log(consulta)
        const respuesta = await pool.query(consulta);
        //////console.log(respuesta);
        res.json(respuesta);

    }
    public async create(req: Request, res: Response): Promise<void> {
        //////console.log(req.body);
        const resp = await pool.query("INSERT INTO vehiculos set ?",
            [req.body]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM vehiculos WHERE id = ${id}`);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //////console.log(req.params);
        const resp = await pool.query("UPDATE vehiculos set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }
    /*public async createExcel(req: Request, res: Response): Promise<void> {
        ////console.log(req.body);
        const resp = await pool.query("INSERT INTO vehiculos set ?",
            [req.body[0]]);
        res.json(resp);
    }*/

    public async createExcel(req: Request, res: Response): Promise<void> {
        const vehiculos = req.body;
        for (let i = 0; i < vehiculos.length; i++) {
            const resp = await pool.query('INSERT INTO vehiculos SET ?', vehiculos[i]);
        }
    }


}
export const vehiculoController = new VehiculoController();