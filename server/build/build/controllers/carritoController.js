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
exports.carritosController = void 0;
const database_1 = __importDefault(require("../database"));
class CarritosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.pasrams)
            const consulta = `SELECT C.id,V.marca,V.modelo,V.year,V.color,V.carroceria,V.descripcion,V.precio 
        FROM carrito C 
        JOIN vehiculos V ON V.id = C.idVehiculo 
        WHERE C.idUsuario = ${id};`;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    listTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params)
            const consulta = `SELECT SUM(c.total) AS carrito_total FROM carrito c WHERE c.idUsuario = ${id}`;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO carrito set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM carrito WHERE id = ${id}`);
            res.json(resp);
        });
    }
}
exports.carritosController = new CarritosController();
