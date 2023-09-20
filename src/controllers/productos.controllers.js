//entra por req y sale dispara por res
//hola
export const crearProducto = (req, res) => {
    let id = req.body.id;
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let marca = req.body.marca;

    console.log(` Se recibió el producto de id ${id}, nombre${nombre}, precio${precio},  marca${marca}`)
}