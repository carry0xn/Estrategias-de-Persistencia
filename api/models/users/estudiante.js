'use strict';

module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuario', 
        key: 'dni'
      }
    },
    id_carrera: {
      type: DataTypes.INTEGER,
      references: {
        model: 'carrera', 
        key: 'id' 
      }
    }
  }, {freezeTableName: true});

    estudiante.associate = function (models){
    //Un estudiante es un usuario
    estudiante.hasOne(models.usuario)
    //Un estudiante tiene una carrera
    estudiante.belongsTo(models.carrera, { foreignKey: 'id_carrera' });
    //Un estudiante se inscribe a N materias
    estudiante.hasMany(models.materia)
  }
  return estudiante;
};
