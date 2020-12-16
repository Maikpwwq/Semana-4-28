const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/usuario/signin'
router.get('/list', usuarioController.signin);
// ruta: '/api/usuario/signup'
router.post('/add', usuarioController.signup);
// ruta: '/api/usuario/list'
router.get('/list', usuarioController.list);
// ruta: '/api/usuario/add'
router.post('/add', auth.verificarAdministrador, usuarioController.add);
// ruta: '/api/usuario/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, usuarioController.update);
// ruta: '/api/usuario/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, usuarioController.activate);
// ruta: '/api/usuario/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, userController.deactivate);

module.exports = router;