'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [{
      nombre: 'Michael',
      tipo_persona: 'Natural',
      tipo_documento: 'CedulaCiudadania',
      num_documento: '1024537835',
      telefono: '3196138057 - 7914356',
      email: 'mariasf@correo.udistrital.edu.co',
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', null, {});
  }
};
