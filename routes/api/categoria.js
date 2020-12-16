const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

const router = routerx();

// ruta: '/api/categoria/list'
router.get('/list', auth.verificarAdministrador, categoiaController.list);
// ruta: '/api/categoria/add'
router.post('/add', auth.verificarAdministrador, categoiaController.add);
// ruta: '/api/categoria/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, categoiaController.update);
// ruta: '/api/categoria/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, categoiaController.activate);
// ruta: '/api/categoria/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, categoiaController.deactivate);

module.exports = router;