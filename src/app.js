import express from "express";
//importamos el nombre que queramos 
import productosRoutes from './routes/productos.routes.js';
import cors from 'cors';
//aca importamos las rutas que creamos en la carpeta routers
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
//app.listen(3000);
////////////////////////////////////////////////////////////////////////////////////////
app.use('/api', productosRoutes); // acá le decimos al servidor que ruta usar 

//por si se solicita un endpoint que no exista
app.use((req, res, next) => {
    console.log("peticion a ruta no encontrada, respondiendo eso...");
    res.status(404).json({ message: 'Ruta no encontrada' });
})

export default app;