'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', [
            {
                nombre: 'Michael Arias Fajardo',
                email: 'mariasf@correo.udistrital.edu.co',
                password: '$2y$08$WRPQA/tlbHaz6U52XagJauFCQtd9b8E7HVsQ7pIGAAQ1z4Ni0SXAm',
                rol: 'Administrador',
                tipo_documento: 'CC',
                num_documento: '1024537835',
                direccion: 'Calle 159 No 8c-45 Bogotá',
                telefono: '3196138057 - 7914356',
                estado: 1,
                createdAt: new Date(),
                updatedAt: new Date()            
                
            },{
                nombre: 'NagaVendedor',
                email: 'vendedor@gmail.com',
                password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
                rol: 'Vendedor',
                tipo_documento: 'CC',
                num_documento: '1024',
                direccion: 'Calle 1',
                telefono: '31',
                estado: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                nombre: 'NagaAlmacenero',
                email: 'almacenero@gmail.com',
                password: '$2y$08$qMDXfG5V.VY4Pprz198yiexcmy8EW3ufR5Wy0hdrHvfkjtna41SWK',
                rol: 'Almacenero',
                tipo_documento: 'CC',
                num_documento: '1024',
                direccion: 'Calle 1',
                telefono: '31',
                estado: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};