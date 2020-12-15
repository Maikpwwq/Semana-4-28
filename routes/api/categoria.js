const routerx = require('express-promise-router');
const categoryController = require('../../controllers/CategoryController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/categoria/list'
router.get('/list', auth.verificarAdministrador, categoryController.list);
// ruta: '/api/categoria/add'
router.post('/add', auth.verificarAdministrador, categoryController.add);
// ruta: '/api/categoria/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, categoryController.update);
// ruta: '/api/categoria/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, categoryController.activate);
// ruta: '/api/categoria/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, categoryController.deactivate);

module.exports = router;