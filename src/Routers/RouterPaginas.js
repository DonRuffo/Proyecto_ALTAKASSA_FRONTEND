import { Router } from "express";
import { controladorInicio,
        controladorCrearCuenta,
        controladorLogin,
        controladorRecuperarContra,
        controladorAcceso} from "../controllers/ControladorPaginas.js";


const routerPaginas = Router()

routerPaginas.get('/', controladorInicio)
routerPaginas.get('/registro', controladorCrearCuenta)
routerPaginas.get('/login', controladorLogin)
routerPaginas.get('/recuperar_contra', controladorRecuperarContra)
routerPaginas.get('/principal', controladorAcceso)

export default routerPaginas