const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.agregarProducto);
router.get('/', productController.listarProductos);
router.delete('/:id', productController.eliminarProducto);

module.exports = router;
