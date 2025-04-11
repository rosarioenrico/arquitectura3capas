const productModel = require('../models/productModel');

exports.agregarProducto = (req, res) => {
    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const producto = productModel.agregar(nombre, precio);
    res.status(201).json({ mensaje: 'Producto agregado', producto });
};

exports.listarProductos = (req, res) => {
    const productos = productModel.listar();
    res.json(productos);
};

exports.eliminarProducto = (req, res) => {
    const id = parseInt(req.params.id);
    const resultado = productModel.eliminar(id);

    if (!resultado) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto eliminado' });
};
