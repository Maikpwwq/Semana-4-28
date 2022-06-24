const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController');
// middleware verifica los permisos asociados al rol Almacenero
const auth = require('../../middlewares/auth');

// ruta: '/api/articulo/list' Consulta los articulos
router.get('/list', articuloController.list);
// ruta: '/api/articulo/add' Agrega un nuevo articulo
router.post('/add', auth.verificarAlmacenero, articuloController.add);
// ruta: '/api/articulo/query' Consulta un articulo por Id
router.get('/query', auth.verificarAlmacenero, articuloController.query);
// ruta: '/api/articulo/queryCodigo' Consulta 
router.get('/queryCodigo', auth.verificarAlmacenero, articuloController.queryCodigo);
// ruta: '/api/articulo/update' Actualiza los datos del articulo
router.put('/update', auth.verificarAlmacenero, articuloController.update);
// ruta: '/api/articulo/activate' Cambia status: 1
router.put('/activate', auth.verificarAlmacenero, articuloController.activate);
// ruta: '/api/articulo/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAlmacenero, articuloController.deactivate);

module.exports = router;