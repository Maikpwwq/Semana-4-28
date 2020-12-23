const router = require('express').Router();
const ventaController = require('../../controllers/VentaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/tienda/list'
router.get('/list', ventaController.list);
// ruta: '/api/tienda/add'
router.post('/add', auth.verificarVendedor, ventaController.add);
// ruta: '/api/venta/query' Consulta una venta por Id
router.get('/query', auth.verificarVendedor, ventaController.query);
// ruta: '/api/venta/queryCodigo' Consulta 
router.get('/queryCodigo', auth.verificarVendedor, ventaController.queryCodigo);
// ruta: '/api/venta/update' Actualiza los datos de la venta
router.put('/update', auth.verificarVendedor, ventaController.update);
// ruta: '/api/tienda/activate' Cambia status: 1
router.put('/activate', auth.verificarVendedor, ventaController.activate);
// ruta: '/api/tienda/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarVendedor, ventaController.deactivate);

module.exports = router;