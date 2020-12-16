'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articulos', [{
      codigo: 'Service-1',
      nombre: 'Tecnologia',
      descripcion: 'lorem ipsum',
      precio_venta: 3000000,
      stock: 10,
      estado: 1,
      categoriaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articulos', null, {});
  }
};
