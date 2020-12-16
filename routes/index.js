const routerx = require('express-promise-router');

// Api Consume end ponints
const categoriaRouter = require('./api/categoria');
const articuloRouter = require('./api/articulo');
const ingresoRouter = require('./api/ingreso');
const ventaRouter = require('./api/venta');
const personaRouter = require('./api/persona');
const usuarioRouter = require('./api/usuario');

const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/ingreso', ingresoRouter);
router.use('/venta', ventaRouter);
router.use('/persona', personaRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;