'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER
  }, {});

  carrera.associate = (models) => {
    carrera.hasMany(models.materia)
  }
  
  return carrera;
};
