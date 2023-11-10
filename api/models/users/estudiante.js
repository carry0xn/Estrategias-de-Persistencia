'use strict';

module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    datoExtra: {
      type: DataTypes.STRING,

    }

  }, {freezeTableName: true});

  estudiante.associate = function (models){
    //Un estudiante es un usuario
    estudiante.belongsTo(models.usuario, {foreignKey: 'dni',sourceKey: 'id_usuario'})
    //Un estudiante tiene una carrera
    //estudiante.belongsTo(models.carrera, { foreignKey: 'id_carrera' });
    //Un estudiante se inscribe a N materias
    //estudiante.hasMany(models.materia)
  }
  return estudiante;
};
