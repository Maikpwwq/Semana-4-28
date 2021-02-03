'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [
      {
        nombre: 'Michael Arias Fajardo',
        tipo_persona: 'Proveedor Servicios',
        tipo_documento: 'CC',
        num_documento: '1024537835',
        telefono: '3196138057 - 7914356',
        email: 'm.michael1024@gmail.com',
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cliente prueba',
        tipo_persona: 'Cliente',
        tipo_documento: 'CC',
        num_documento: '1024888888',
        telefono: '314444444',
        email: 'cliente@gmail.com',
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', null, {});
  }
};
