import express, { Application } from 'express'; //libreria
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuarioRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import formapagoRoutes from './routes/formapagoRoutes';
import morgan from 'morgan';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import cors from 'cors';
import vehiculoRoutes from './routes/vehiculoRoutes';
import carritosRoutes from './routes/carritoRoutes';
import transferenciaRoutes from './routes/transferenciaRoutes';
import creditoRoutes from './routes/creditoRoutes';
import debitoRoutes from './routes/debitoRoutes';
import ventaRoutes from './routes/ventaRoutes';
import { ventasController } from './controllers/ventaController';
import fs from 'fs'; //libreria para guardar archivos
class Server //clase
{
    public app: Application; //variable de control
    constructor() {
        this.app = express(); //ejecutar servidor
        this.config();
        this.routes();
        this.app.use(express.static(__dirname + "/img"));
    }
    config(): void //definir propiedades del servidor (en este caso el puerto)
    {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/documentacion', swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
        this.app.use('/api/categorias', categoriasRoutes);
        this.app.use('/api/formapagos', formapagoRoutes);
        this.app.use('/api/vehiculos', vehiculoRoutes);
        this.app.use('/api/carritos', carritosRoutes);
        this.app.use('/api/transferencias', transferenciaRoutes);
        this.app.use('/api/creditos', creditoRoutes);
        this.app.use('/api/debitos', debitoRoutes);
        this.app.use('/api/ventas', ventaRoutes);
        this.app.post('/uploadImagen', (req, res) => {
            const file = req.body.src;
            const carpeta = req.body.carpeta;
            const name = req.body.id;
            console.log(file, carpeta, name);

            const binaryData =
                Buffer.from(file.replace(/^data:image\/[a-z]+;base64,/, ""),
                    'base64').toString('binary');
            fs.writeFile(`${__dirname}/img/` + carpeta + '/' + name + '.jpg', binaryData,
                "binary", (err) => {
                console.log(err);
            });

            res.json({ fileName: name + '.jpg' });
        });

    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor se encuentra en el puerto: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();