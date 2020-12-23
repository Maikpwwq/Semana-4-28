const db = require('../models');

module.exports = {
        // Agregar un Ingreso al sistema
        add : async (req, res, next) => {
            try {    
                const registro = await db.ingreso.create(req.body);
                if (!registro) {
                    res.status(404).send({ message: "Error al crear el ingreso" });
                } else {
                    res.status(200).json(registro);
                }
            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                })
                next(error)
            }  
        },

        // Listar los Ingresos del sistema
        list : async (req, res, next) => {
            try {
                const registros = await db.ingreso.findAll();
                if (registros) {
                    res.status(200).json(registros);
                } else {
                    res.status(404).send({
                        message: 'No existen Ingresos en el sistema'
                    })
                }        
            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                })
                next(error)
            }  
        },

        // Consultar un ingreso por Id
        query : async (req, res, next) => {
            try {
                const reg = await db.ingreso.findOne({ 
                    id: req.query.id 
                })
        
                if (!reg) {
                    res.status(404).send({
                        message: 'El registro no existe'
                    });
                } else {
                    res.status(200).json(reg);
                }
            } catch (e) {
                res.status(500).send({
                    message: 'Ocurrió un error'
                });
                next(e);
            }
        },
        
        // ingreso
        queryCodigo : async(req, res, next) => {
            try {
                const reg = await db.ingreso.findOne({ 
                    codigo: req.query.codigo 
                })
        
                if (!reg) {
                    res.status(404).send({
                        message: 'El registro no existe'
                    });
                } else {
                    res.status(200).json(reg);
                }
            } catch (e) {
                res.status(500).send({
                    message: 'Ocurrió un error'
                });
                next(e);
            }
        },            

        // Remover un ingreso
        remove : async (req, res, next) => {
            try {
                const reg = await db.ingreso.destroy({ 
                    where: { id: req.body.id }
                });
                if (reg == 0) {
                    res.status(404).send({ 
                        message: "La ingreso no existe" 
                    });
                } else {
                    res.status(200).json(reg);
                }
            } catch (e) {
                res.status(500).send({
                    message: 'Ocurrió un error'
                }); 
                next(e)
            }
        },

        // Actualizar los Datos de un Ingreso
        update : async (req, res, next) => {
            try {
                const registro = await db.ingreso.update({
                    usuarioId: req.body.usuarioId,
                    personaId: req.body.personaId,
                    tipo_comprobante: req.body.tipo_comprobante,
                    serie_comprobante: req.body.serie_comprobante,
                    num_comprobante: req.body.num_comprobante,
                    impuesto: req.body.impuesto,
                    total: req.body.total
                }, { 
                    where: { id: req.body.id }
                });
                res.status(200).json(registro);

            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                })
                next(error)
            }  
        },

        // Activar el registro del Ingreso
        activate : async (req, res, next) => {
            try {
                const registro = await db.ingreso.update({estado:1},{
                    where: { id: req.body.id }
                });
                res.status(200).json(registro);
            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                });
                next(error)
            }  
        },

        // Desactivar el registro del Ingreso
        deactivate : async (req, res, next) => {
            try {
                const registro = await db.ingreso.update({estado:0},{
                    where: { id: req.body.id }
                });
                res.status(200).json(registro);
            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                });
                next(error)
            }  
        }
}