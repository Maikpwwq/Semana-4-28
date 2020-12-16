/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
// middleware verifica los permisos asociados al rol
const auth = require('../middlewares/auth');

const router = routerx();

// ruta: '/api/articulo/list'
router.get('/list', articuloController.list);
// ruta: '/api/articulo/add'
router.post('/add', auth.verificarAdministrador, articuloController.add);
// ruta: '/api/articulo/activate' Actualiza los datos
router.put('/update', auth.verificarAdministrador, articuloController.update);
// ruta: '/api/articulo/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, articuloController.activate);
// ruta: '/api/articulo/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, articuloController.deactivate);

module.exports = router;