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
exports.ventasController = void 0;
const database_1 = __importDefault(require("../database"));
class VentasController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            const resp = yield database_1.default.query(`INSERT INTO factura (idUsuario, total, idFormapago)
        VALUES (${req.body.idUsuario}, 0, ${req.body.idFormapago});`);
            res.json(resp);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params)
            const consulta = `SELECT VE.fecha, V.marca, V.modelo, V.year, V.color, V.carroceria, V.precio
        FROM ventas VE
        JOIN vehiculos V
        ON VE.idVehiculo = V.id;`;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params)
            const consulta = `SELECT U.nombre as nombreU, F.fecha, FP.nombre, V.marca
        FROM usuarios U
        JOIN factura F ON U.id = F.idUsuario
        JOIN forma_pago FP ON F.idFormaPago = FP.id
        JOIN detalle_factura D ON F.id = D.idFactura
        JOIN vehiculos V ON D.idVehiculo = V.id;`;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
}
exports.ventasController = new VentasController();
