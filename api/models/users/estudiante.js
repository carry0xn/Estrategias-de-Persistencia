'use strict';

module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  }, {});

  estudiante.associate = function (models){
    // Un estudiante es un usuario
    estudiante.hasOne(models.usuario)

    // Un estudiante se inscribe a N materias
    estudiante.hasMany(models.materia)
  }
  
  return estudiante;
};
