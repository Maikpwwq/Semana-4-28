'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ingresoArticulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingresoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // IngresoArticulo pertenece a ingreso 1:1
          model: 'ingresos',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'SET NULL'
      },
      articuloId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // IngresoArticulo pertenece a articulo 1:1
          model: 'articulos',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'SET NULL'
      },
      proyecto: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ingresoArticulos');
  }
};