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
exports.debitosController = void 0;
const database_1 = __importDefault(require("../database"));
class DebitosController {
    verificaDebito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            const { id } = req.params;
            const consulta = `SELECT *
        FROM debito D
        JOIN usuarios U ON U.id = D.idUsuario
        WHERE U.id = "${id}"`;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) {
                res.json(null);
            }
            else {
                res.json(respuesta[0]);
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params)
            const consulta = 'SELECT * FROM debito';
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO debito set ?", [req.body]);
            res.json(resp);
        });
    }
}
exports.debitosController = new DebitosController();
