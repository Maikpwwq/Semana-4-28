const routerx = require('express-promise-router');
const ingresoController = require('../../controllers/IngresoController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/almacen/list'
router.get('/list', auth.verificarAdministrador, ingresoController.list);
// ruta: '/api/almacen/add'
router.post('/add', auth.verificarAdministrador, ingresoController.add);
// ruta: '/api/almacen/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, ingresoController.update);
// ruta: '/api/almacen/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, ingresoController.activate);
// ruta: '/api/almacen/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, ingresoController.deactivate);

module.exports = router;