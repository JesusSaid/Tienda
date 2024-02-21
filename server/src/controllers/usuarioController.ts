import { Request, response, Response } from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class UsuariosController {
    public async verificaUsuario(req: Request, res: Response): Promise<void> {
        const passUsuario = `SELECT password FROM usuarios WHERE correo="${req.body.correo}"`;
        const respuesta = await pool.query(passUsuario)
        const hashPassword = respuesta[0].password;
        let prueba = await bcrypt.compare(req.body.password, hashPassword);
        //console.log(prueba);
        req.body.password = hashPassword;


        if (prueba == true) {
            //console.log(req.body);
            const consulta = `SELECT tipo,id FROM usuarios WHERE correo="${req.body.correo}" and password="${req.body.password}"`;
            //console.log(consulta)
            const respuesta = await pool.query(consulta);
            res.json(respuesta[0])
        } else {
            res.json(null);
        }
    }
    public async list(req: Request, res: Response): Promise<void> {
        //console.log(req.params)
        const consulta = 'SELECT * FROM usuarios';
        //console.log("chaid ijodepuuu")
        const respuesta = await pool.query(consulta);
        //console.log(respuesta);
        res.json(respuesta);

    }
    public async listOne(req: Request, res: Response): Promise<void> {
        //console.log(req.params);
        const { id } = req.params;
        const consulta = 'SELECT * FROM usuarios WHERE id = ' + id;
        //console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        let pass = req.body.password;
        //console.log(pass)
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        //console.log(req.body.password)
        let prueba = await bcrypt.compare("holota", req.body.password);
        //console.log(prueba)
        const resp = await pool.query("INSERT INTO usuarios set ?", [req.body]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM usuarios WHERE id = ${id}`);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //console.log(req.params);
        const resp = await pool.query("UPDATE usuarios set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }
    public async CambiarPassword(req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        let pass = req.body.password;
        let cor = req.body.correo;
        //console.log(pass, cor);
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        //console.log(req.body.password)


        const resp = await pool.query("UPDATE usuarios set password=? where correo=?", [req.body.password, req.body.correo]);

        res.json(resp);
    }
    public async createExcel(req: Request, res: Response): Promise<void> {
        const usuarios = req.body;
        for (let i = 0; i < usuarios.length; i++) {
            let pass = usuarios[i].password;
            //console.log(pass)
            const salt = await bcrypt.genSalt(10);
            usuarios[i].password = await bcrypt.hash(usuarios[i].password, salt);
            const resp = await pool.query('INSERT INTO usuarios SET ?', usuarios[i]);
        }
    }

}
export const usuariosController = new UsuariosController();