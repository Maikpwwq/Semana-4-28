'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.categoria, { 
        foreignKey: 'categoriaId', 
        as: 'detalle-categoria' 
      });      
    }
  };
  articulo.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio_venta: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articulo',
  });
  return articulo;
};