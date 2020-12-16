const routerx = require('express-promise-router');
const ventaController = require('../../controllers/VentaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/tienda/list'
router.get('/list', auth.verificarAdministrador, ventaController.list);
// ruta: '/api/tienda/add'
router.post('/add', auth.verificarAdministrador, ventaController.add);
// ruta: '/api/tienda/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, ventaController.update);
// ruta: '/api/tienda/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, ventaController.activate);
// ruta: '/api/tienda/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, ventaController.deactivate);

module.exports = router;