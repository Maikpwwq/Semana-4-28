const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/categoria/list'
router.get('/list', categoriaController.list);
// ruta: '/api/categoria/add'
router.post('/add', auth.verificarAlmacenero, categoriaController.add);
// ruta: '/api/categoria/activate' Actualiza los datos
router.put('/update', auth.verificarAlmacenero, categoriaController.update);
// ruta: '/api/categoria/activate' Cambia status: 1
router.put('/activate', auth.verificarAlmacenero, categoriaController.activate);
// ruta: '/api/categoria/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAlmacenero, categoriaController.deactivate);

module.exports = router;