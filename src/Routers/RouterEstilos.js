import { Router } from "express";
import controladorEstilos from "../controllers/ControladorEstilos.js";


const routerEstilos = Router()

routerEstilos.get('/:archivo', controladorEstilos)

export default routerEstilos