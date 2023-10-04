'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: DataTypes.STRING
  }, {});

  carrera.associate = (models) => {
    carrera.hasMany(models.materia)
  }
  
  return carrera;
};
