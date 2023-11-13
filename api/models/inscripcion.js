'use strict';

module.exports = (sequelize, DataTypes) => {
  const inscripcion = sequelize.define('inscripcion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comision: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duracion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_materia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'materia',
        key: 'id'
      }
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'dni'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {freezeTableName: true});

  inscripcion.associate = function (models){
    inscripcion.hasMany(models.materia, {foreignKey: 'id'})
    inscripcion.hasMany(models.usuario, {foreignKey: 'dni'})
  }
  
  return inscripcion;
};
