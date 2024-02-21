import { Request, response, Response } from 'express';
import pool from '../database';
class VentasController {
    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        const resp = await pool.query(`INSERT INTO factura (idUsuario, total, idFormapago)
        VALUES (${req.body.idUsuario}, 0, ${req.body.idFormapago});`);
        res.json(resp);
    }
    public async list(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = `SELECT VE.fecha, V.marca, V.modelo, V.year, V.color, V.carroceria, V.precio
        FROM ventas VE
        JOIN vehiculos V
        ON VE.idVehiculo = V.id;`;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async list2(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = `SELECT U.nombre as nombreU, F.fecha, FP.nombre, V.marca
        FROM usuarios U
        JOIN factura F ON U.id = F.idUsuario
        JOIN forma_pago FP ON F.idFormaPago = FP.id
        JOIN detalle_factura D ON F.id = D.idFactura
        JOIN vehiculos V ON D.idVehiculo = V.id;`;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
}
export const ventasController = new VentasController();