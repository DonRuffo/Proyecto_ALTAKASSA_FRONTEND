import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

import routerPaginas from './Routers/RouterPaginas.js';
import routerEstilos from './Routers/RouterEstilos.js';
import routerImagenes from './Routers/RouterImagenes.js';

const appFront = express()
appFront.use(express.json())

//PUERTO
appFront.set('port',  process.env.PORT || 6000)

//RUTAS
appFront.use('/Imagenes', routerImagenes)
appFront.use('/Estilos', routerEstilos)
appFront.use('/', routerPaginas)

//MANEJO DE ERRORES
appFront.use((req,res)=> res.status(400).send("Página no encontrada"))

export default appFront

