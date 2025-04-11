let productos = [];

exports.agregar = (nombre, precio) => {
    const producto = {
        id: productos.length + 1,
        nombre,
        precio
    };
    productos.push(producto);
    return producto;
};

exports.listar = () => {
    return productos;
};

exports.eliminar = (id) => {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) return false;
    productos.splice(index, 1);
    return true;
};
