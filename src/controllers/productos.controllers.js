//entra por req y sale dispara por res
//hola
import { pool } from '../db.js'
export const crearProducto = async(req, res) => {
    //try y el catch es para que el servidor no se caiga 

    try{
        let nombre = req.body.nombre;
        let precio = req.body.precio;
        let marca = req.body.marca;
    
        // console.log(` Se recibió el producto de id ${id}, nombre${nombre}, precio${precio},  marca${marca}`)
    
        let sql = 'INSERT INTO `tienda`.`productos` (`nombre`, `precio`, `marca`) VALUES (?,?,?);'
        let datos = [nombre, precio, marca]
    //DATOS DEBE DE SER UN ARRAY
    //Debe esperar un poco cuando empieza a hacer caminos de rutas
        let rta = await pool.query(sql, datos)
        console.log(rta[0])

        if(rta[0].affectedRows==1){
            return res.status(200).json({message:'producto guardado'})
        }
    }
        catch(e){
            console.log(`Ocurrió un error en msql ${e.sqlMessage}`)
            return res.status(500).json({message:`Ocurrió un error en el servidor ${e.sqlMessage}`})

        }
console.log()
   //  let id = req.body.id; no se usa porque en la base de datos es autoincrementable
    

}

export const consultarProducto = async(req, res) => {
    const id =req.params.id
    
    const sql = 'SELECT * FROM productos WHERE id = ?'
    const datos = [id]
    const rtaSql = await pool.query(sql,datos)
    let arraRta = rtaSql[0]
if(arraRta.length > 0 ){
    let producto = arraRta[0]
    console.log(arraRta)
    return res.status(200).json(producto)
}
else{
    return res.status(204)
}
   // console.log (rtaSql)
}