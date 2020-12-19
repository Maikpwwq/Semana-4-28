const router = require('express').Router();

// Api Consume end ponints
const categoriaRouter = require('./api/categoria');
const articuloRouter = require('./api/articulo');
const ingresoRouter = require('./api/ingreso');
const ventaRouter = require('./api/venta');
const personaRouter = require('./api/persona');
const usuarioRouter = require('./api/usuario');

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/ingreso', ingresoRouter);
router.use('/venta', ventaRouter);
router.use('/persona', personaRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;