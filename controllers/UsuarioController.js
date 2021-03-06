const db = require('../models');
const bcrypt = require('bcryptjs');
// Servicios
const tokenServices = require('../services/token')

module.exports = {
        // Inicio de Sesion de usuario
        login : async (req, res, next) => {
            try {
                
                const user = await db.usuario.findOne({ 
                    where: { 
                        email: req.body.email, 
                        estado:1 
                    },
                });

                if (user) {
                    // compareSync
                    const passwordIsValid = await bcrypt.compare( req.body.password, user.password );

                    if (passwordIsValid) {
                        console.log('match passwords compare')
                        const token = await tokenServices.encode( user.id, user.rol );
                        
                        res.status(200).json({
                            auth: true,
                            tokenReturn: token,
                        });
                    } else {
                        res.status(401).send({
                            auth: false,
                            tokenReturn: null,
                            error: 'Contraseña invalida'
                        });
                    };

                } else {
                    res.status(404).json({
                        error: 'Error al buscar con estos datos de usuario y contraseña'
                    });
                };

            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                });
                next(error)
            }
        }, 

        // Registro de Usuario
        signup : async (req, res, next) => {
            try {
                const user = await db.usuario.findOne({ 
                    where: { email: req.body.email }
                });
                if (user) {
                    res.status(409).send({
                        message: 'error, la cuenta de correo ya se encuentra registrada',
                    })
                } else {
                    req.body.password = bcrypt.hashSync(req.body.password, 10);
                    const user = await db.usuario.create(req.body);
                    res.status(200).json(user);        
                }
            } catch ( error ) {
                res.status(500).send({
                    message: 'Error ->' + error
                });
                next(error)
            }  
        },

        // Listar los Usuarios
        list : async (req, res, next) => {
            try {
                const users = await db.usuario.findAll();
                if (users) {
                    res.status(200).json(users);
                } else {
                    res.status(404).send({
                        message: 'No existen usuarios en el sistema'
                    })
                }    
            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                });
                next(error)
            }  
        },

        // Adicionar un Usuario
        add : async (req, res, next) => {
            try {    
                req.body.password = bcrypt.hashSync(req.body.password, 10);
                const registro = await db.usuario.create(req.body);
                if (!registro) {
                    res.status(404).send({ message: "Error al crear el usuario" });
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

        // Consultar un usuario por Id
        query : async (req, res, next) => {
            try {
                const reg = await db.usuario.findOne({ 
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

        // usuario
        queryCodigo : async(req, res, next) => {
            try {
                const reg = await db.usuario.findOne({ 
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

        // Remover un usuario
        remove : async (req, res, next) => {
            try {
                const reg = await db.usuario.destroy({ 
                    where: { id: req.body.id }
                });
                if (reg == 0) {
                    res.status(404).send({ 
                        message: "La usuario no existe" 
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

        // Actualizar los datos del Usuario
        update : async (req, res, next) => {
            try {
                req.body.password = bcrypt.hashSync(req.body.password, 8);
                const user = await db.usuario.update({            
                    rol: req.body.rol,
                    nombre: req.body.nombre,
                    password: req.body.password,
                    email: req.body.email,
                    tipo_documento: req.body.tipo_documento,
                    num_documento: req.body.num_documento,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono
                }, { 
                    where: { id: req.body.id }
                });
                res.status(200).json(user);

            } catch (error) {
                res.status(500).send({
                    message: 'Error ->' + error
                })
                next(error)
            }  
        },

        // Activar el registro del Usuario
        activate : async (req, res, next) => {
            try {
                const registro = await db.usuario.update({estado:1},{
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

        // Desactivar el registro del Usuario
        deactivate : async (req, res, next) => {
            try {
                const registro = await db.usuario.update({estado:0},{
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
}