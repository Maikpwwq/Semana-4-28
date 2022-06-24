const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/categoria/list'
router.get('/list', categoriaController.list);
// ruta: '/api/categoria/add' Agergar nueva categoria
router.post('/add', auth.verificarAlmacenero, categoriaController.add);
// ruta: '/api/categoria/query' Consulta una categoria por Id
router.get('/query', auth.verificarAlmacenero, categoriaController.query);
// ruta: '/api/categoria/queryCodigo' Consulta 
router.get('/queryCodigo', auth.verificarAlmacenero, categoriaController.queryCodigo);
// ruta: '/api/categoria/update' Actualiza los datos de la categoria
router.put('/update', auth.verificarAlmacenero, categoriaController.update);
// ruta: '/api/categoria/activate' Cambia status: 1
router.put('/activate', auth.verificarAlmacenero, categoriaController.activate);
// ruta: '/api/categoria/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAlmacenero, categoriaController.deactivate);
router.delete('/remove', categoriaController.remove);

module.exports = router;