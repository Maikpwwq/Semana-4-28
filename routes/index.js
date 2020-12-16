const routerx = require('express-promise-router');

// Api Consume end ponints
const categoriaRouter = require('./api/categoria');
const articuloRouter = require('./api/articulo');
const almacenRouter = require('./api/almacen');
const tiendaRouter = require('./api/tienda');
const usuarioRouter = require('./api/usuario');

const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/almacen', almacenRouter);
router.use('/tienda', tiendaRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;