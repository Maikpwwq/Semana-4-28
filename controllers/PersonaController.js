const db = require('../models');

module.exports = {
        // Agregar una Persona
        add : async (req, res, next) => {
            try {    
                const registro = await db.persona.create(req.body);
                if (!registro) {
                    res.status(404).send({ 
                        message: "Error al crear la persona" 
                    });
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

        // Listar las Personas
        list : async (req, res, next) => {
            try {
                const registros = await db.persona.findAll();
                if (registros) {
                    res.status(200).json(registros);
                } else {
                    res.status(404).send({
                        message: 'No existen Personas en el sistema'
                    })
                }        
            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                })
                next(error)
            }  
        },

        // Consultar un persona por Id
        query : async (req, res, next) => {
            try {
                const reg = await db.persona.findOne({ 
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

        // persona
        queryCodigo : async(req, res, next) => {
            try {
                const reg = await db.persona.findOne({ 
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

        // Remover un persona
        remove : async (req, res, next) => {
            try {
                const reg = await db.persona.destroy({ 
                    where: { id: req.body.id }
                });
                if (reg == 0) {
                    res.status(404).send({ message: "La persona no existe" });
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

        // Actualizar los datos de la Persona
        update : async (req, res, next) => {
            try {
                const registro = await db.persona.update({
                    tipo_persona: req.body.tipo_persona,
                    nombre: req.body.nombre,
                    tipo_documento: req.body.tipo_documento,
                    num_documento: req.body.num_documento,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono,
                    email: req.body.email
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

        // Activar el registro de la Persona
        activate : async (req, res, next) => {
            try {
                const registro = await db.persona.update({estado:1},{
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

        // Desactivar el registro de la Persona
        deactivate : async (req, res, next) => {
            try {
                const registro = await db.persona.update({estado:0},{
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