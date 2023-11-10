'use strict';

module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING
    },
    duracion: {
      type: DataTypes.STRING
    },
    titulo: {
      type: DataTypes.INTEGER, // 'Pregrado' || 'Grado' || 'Posgrado'
      allowNull: false
    }
  }, {freezeTableName: true});

  carrera.associate = (models) => {
    // Una carrera tiene N materias
    carrera.hasMany(models.materia)
  }
  
  return carrera;
};
