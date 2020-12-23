const router = require('express').Router();
const ingresoController = require('../../controllers/IngresoController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/almacen/list'
router.get('/list', ingresoController.list);
// ruta: '/api/almacen/add'
router.post('/add', auth.verificarAlmacenero, ingresoController.add);
// ruta: '/api/ingreso/query' Consulta una ingreso por Id
router.get('/query', auth.verificarAlmacenero, ingresoController.query);
// ruta: '/api/ingreso/queryCodigo' Consulta 
router.get('/queryCodigo', auth.verificarAlmacenero, ingresoController.queryCodigo);
// ruta: '/api/ingreso/update' Actualiza los datos de la ingreso
router.put('/update', auth.verificarAlmacenero, ingresoController.update);
// ruta: '/api/almacen/activate' Cambia status: 1
router.put('/activate', auth.verificarAlmacenero, ingresoController.activate);
// ruta: '/api/almacen/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAlmacenero, ingresoController.deactivate);

module.exports = router;