'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingresoArticulos', [{
      ingresoId: 1,
      articuloId: 1,
      proyecto: 'Proyecto1',
      descripcion: 'Registre el objetivo del proyecto',
      precio: 300000,
      descuento: 80000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingresoArticulos', null, {});
  }
};
