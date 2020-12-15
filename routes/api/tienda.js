const routerx = require('express-promise-router');
const storeHouseController = require('../../controllers/StoreHouseController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/tienda/list'
router.get('/list', auth.verificarAdministrador, storeHouseController.list);
// ruta: '/api/tienda/add'
router.post('/add', auth.verificarAdministrador, storeHouseController.add);
// ruta: '/api/tienda/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, storeHouseController.update);
// ruta: '/api/tienda/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, storeHouseController.activate);
// ruta: '/api/tienda/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, storeHouseController.deactivate);

module.exports = router;