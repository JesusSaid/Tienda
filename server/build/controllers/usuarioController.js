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
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuariosController {
    verificaUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const passUsuario = `SELECT password FROM usuarios WHERE correo="${req.body.correo}"`;
            const respuesta = yield database_1.default.query(passUsuario);
            const hashPassword = respuesta[0].password;
            let prueba = yield bcryptjs_1.default.compare(req.body.password, hashPassword);
            //console.log(prueba);
            req.body.password = hashPassword;
            if (prueba == true) {
                //console.log(req.body);
                const consulta = `SELECT tipo,id FROM usuarios WHERE correo="${req.body.correo}" and password="${req.body.password}"`;
                //console.log(consulta)
                const respuesta = yield database_1.default.query(consulta);
                res.json(respuesta[0]);
            }
            else {
                res.json(null);
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params)
            const consulta = 'SELECT * FROM usuarios';
            //console.log("chaid ijodepuuu")
            const respuesta = yield database_1.default.query(consulta);
            //console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.params);
            const { id } = req.params;
            const consulta = 'SELECT * FROM usuarios WHERE id = ' + id;
            //console.log(consulta)
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            let pass = req.body.password;
            //console.log(pass)
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            //console.log(req.body.password)
            let prueba = yield bcryptjs_1.default.compare("holota", req.body.password);
            //console.log(prueba)
            const resp = yield database_1.default.query("INSERT INTO usuarios set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuarios WHERE id = ${id}`);
            res.json(resp);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params);
            const resp = yield database_1.default.query("UPDATE usuarios set ? WHERE id = ?", [req.body, id]);
            res.json(resp);
        });
    }
    CambiarPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            let pass = req.body.password;
            let cor = req.body.correo;
            //console.log(pass, cor);
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            //console.log(req.body.password)
            const resp = yield database_1.default.query("UPDATE usuarios set password=? where correo=?", [req.body.password, req.body.correo]);
            res.json(resp);
        });
    }
    createExcel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = req.body;
            for (let i = 0; i < usuarios.length; i++) {
                let pass = usuarios[i].password;
                //console.log(pass)
                const salt = yield bcryptjs_1.default.genSalt(10);
                usuarios[i].password = yield bcryptjs_1.default.hash(usuarios[i].password, salt);
                const resp = yield database_1.default.query('INSERT INTO usuarios SET ?', usuarios[i]);
            }
        });
    }
}
exports.usuariosController = new UsuariosController();
