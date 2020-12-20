const router = require('express').Router();
const ventaController = require('../../controllers/VentaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/tienda/list'
router.get('/list', ventaController.list);
// ruta: '/api/tienda/add'
router.post('/add', auth.verificarVendedor, ventaController.add);
// ruta: '/api/tienda/activate' Actualiza los datos
router.put('/update', auth.verificarVendedor, ventaController.update);
// ruta: '/api/tienda/activate' Cambia status: 1
router.put('/activate', auth.verificarVendedor, ventaController.activate);
// ruta: '/api/tienda/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarVendedor, ventaController.deactivate);

module.exports = router;