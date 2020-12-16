'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VentaArticulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ventaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // VentaArticulo pertenece a venta 1:1
          model: 'Ventas',
          key: 'id'
        }
      },
      articuloId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // VentaArticulo pertenece a articulo 1:1
          model: 'Articulos',
          key: 'id'
        }
      },
      articulo: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      descuento: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('VentaArticulos');
  }
};