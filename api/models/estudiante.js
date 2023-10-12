'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});

  estudiante.associate = function (models){
    estudiante.hasMany(models.materia)
  }
  
  return estudiante;
};
