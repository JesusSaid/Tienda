"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculoController = void 0;
const database_1 = __importDefault(require("../database"));
class VehiculoController {
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            ////console.log(req.params);
            const { id1 } = req.params;
            //const consulta = 'SELECT V.* , C.nombre as nombreCategoria FROM vehiculos V INNER JOIN categorias C on V.categoria = C.nombre';
            const consulta = 'SELECT * FROM vehiculos WHERE id = ' + id1;
            ////console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'vehiculo no encontrado' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            ////console.log(req.params)
            const consulta = `SELECT V.* , C.nombre as nombreCategoria
        FROM vehiculos V
        INNER JOIN categorias C on V.categoria = C.id
        WHERE V.cantidad > 0;`;
            ////console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            ////console.log(respuesta);
            res.json(respuesta);
        });
    }
    listAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            ////console.log(req.params)
            const consulta = `SELECT V.* , C.nombre as nombreCategoria
        FROM vehiculos V
        INNER JOIN categorias C on V.categoria = C.id;`;
            ////console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            ////console.log(respuesta);
            res.json(respuesta);
        });
    }
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            ////console.log(req.params);
            const { id2 } = req.params;
            const consulta = `SELECT V.*, C.nombre AS nombreCategoria
        FROM vehiculos V
        INNER JOIN categorias C ON V.categoria = C.id
        WHERE V.categoria = '${id2}' AND V.cantidad > 0`;
            ////console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            ////console.log(respuesta);
            res.json(respuesta);
        });
    }
    nameCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //////console.log(req.params)
            const consulta = 'SELECT V.* , C.nombre as nombreCategoria FROM vehiculos V INNER JOIN categorias C on V.categoria = C.nombre';
            //////console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //////console.log(respuesta);
            res.json(respuesta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //////console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO vehiculos set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM vehiculos WHERE id = ${id}`);
            res.json(resp);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //////console.log(req.params);
            const resp = yield database_1.default.query("UPDATE vehiculos set ? WHERE id = ?", [req.body, id]);
            res.json(resp);
        });
    }
    /*public async createExcel(req: Request, res: Response): Promise<void> {
        ////console.log(req.body);
        const resp = await pool.query("INSERT INTO vehiculos set ?",
            [req.body[0]]);
        res.json(resp);
    }*/
    createExcel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculos = req.body;
            for (let i = 0; i < vehiculos.length; i++) {
                const resp = yield database_1.default.query('INSERT INTO vehiculos SET ?', vehiculos[i]);
            }
        });
    }
}
exports.vehiculoController = new VehiculoController();
