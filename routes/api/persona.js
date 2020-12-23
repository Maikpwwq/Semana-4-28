const router = require('express').Router();
const personaController = require('../../controllers/PersonaController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/usuario/list'
router.get('/list', personaController.list);
// ruta: '/api/usuario/add'
router.post('/add', auth.verificarAdministrador, personaController.add);
// ruta: '/api/persona/query' Consulta una persona por Id
router.get('/query', auth.verificarAdministrador, personaController.query);
// ruta: '/api/persona/queryCodigo' Consulta 
router.get('/queryCodigo', auth.verificarAdministrador, personaController.queryCodigo);
// ruta: '/api/persona/update' Actualiza los datos de la persona
router.put('/update', auth.verificarAdministrador, personaController.update);
// ruta: '/api/usuario/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, personaController.activate);
// ruta: '/api/usuario/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, personaController.deactivate);

module.exports = router;