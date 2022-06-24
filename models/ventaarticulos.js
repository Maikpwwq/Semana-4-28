'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ventaArticulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      this.belongsTo(models.venta, { 
        foreignKey: 'ventaId', 
        as: 'detalle-venta' 
      });

      this.belongsTo(models.articulo, { 
        foreignKey: 'articuloId', 
        as: 'detalle-articulo' 
      })
      
    }
  };
  ventaArticulos.init({
    ventaId: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER,
    proyecto: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ventaArticulos',
  });
  return ventaArticulos;
};