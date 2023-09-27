import {Router} from 'express'
//Es el controlador 
import { crearProducto, consultarProducto } from "../controllers/productos.controllers.js"

const router = Router();
// acá va el endpoin
router.get('/producto/id/:id', consultarProducto)
router.post('/producto', crearProducto) //lo que venga por el método post
//el nombre puede cambiar a cualquier nombre producto
//Aca estamos armando pero aún no está funcionando el router 
//toca decirle al servidor que vamos a usar esta ruta

export default router
