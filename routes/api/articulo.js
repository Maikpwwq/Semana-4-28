const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController');
// middleware verifica los permisos asociados al rol
const auth = require('../../middlewares/auth');

// ruta: '/api/articulo/list'
router.get('/list', articuloController.list);
// ruta: '/api/articulo/add'
router.post('/add', auth.verificarAlmacenero, articuloController.add);
// ruta: '/api/articulo/activate' Actualiza los datos
router.put('/update', auth.verificarAlmacenero, articuloController.update);
// ruta: '/api/articulo/activate' Cambia status: 1
router.put('/activate', auth.verificarAlmacenero, articuloController.activate);
// ruta: '/api/articulo/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAlmacenero, articuloController.deactivate);

//router.get('/query', articuloController.query);
//router.get('/queryCodigo', articuloController.queryCodigo);

module.exports = router;