'use strict'; 
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.venta); //nuevaLinea   
      this.hasMany(models.ingreso); //nuevaLinea 
    }
  };
  usuario.init({
    rol: DataTypes.STRING,
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    tipo_documento: DataTypes.STRING,
    num_documento: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};