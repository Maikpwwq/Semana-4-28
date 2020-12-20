const router = require('express').Router();
const usuarioController = require('../../controllers/UsuarioController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/usuario/signin'
router.post('/login', usuarioController.login);
// ruta: '/api/usuario/signup'
router.post('/signup', usuarioController.signup);
// ruta: '/api/usuario/list'
router.get('/list', usuarioController.list);
// ruta: '/api/usuario/add'
router.post('/add', auth.verificarAdministrador, usuarioController.add);
// ruta: '/api/usuario/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, usuarioController.update);
// ruta: '/api/usuario/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, usuarioController.activate);
// ruta: '/api/usuario/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, usuarioController.deactivate);

module.exports = router;