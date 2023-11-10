'use strict';

module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        key: 'dni'
      }
    }
  }, {freezeTableName: true});

  profesor.associate = function (models){
    // Un profesor es un usuario
    profesor.hasOne(models.usuario)

    // Un profesor dicta N materias
    profesor.hasMany(models.materia)

    // Un profesor tiene N estudiantes
    profesor.hasMany(models.estudiante)
  }
  
  return profesor;
};
