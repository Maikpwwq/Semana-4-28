const routerx = require('express-promise-router');
const userController = require('../../controllers/UserController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/usuario/list'
router.get('/list', auth.verificarAdministrador, userController.list);
// ruta: '/api/usuario/add'
router.post('/add', auth.verificarAdministrador, userController.add);
// ruta: '/api/usuario/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, userController.update);
// ruta: '/api/usuario/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, userController.activate);
// ruta: '/api/usuario/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, userController.deactivate);

module.exports = router;