const routerx = require('express-promise-router');
const wareHouseController = require('../../controllers/WareHouseController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/almacen/list'
router.get('/list', auth.verificarAdministrador, wareHouseController.list);
// ruta: '/api/almacen/add'
router.post('/add', auth.verificarAdministrador, wareHouseController.add);
// ruta: '/api/almacen/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, wareHouseController.update);
// ruta: '/api/almacen/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, wareHouseController.activate);
// ruta: '/api/almacen/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, wareHouseController.deactivate);

module.exports = router;