'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// Loads sequelize configs from env
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Reads all model files and adds their classes to *db*
function getDirectories(path) {
  return [''].concat(fs.readdirSync(path).filter(
    (file) => { return fs.statSync(path+'/'+file).isDirectory() }
  ));
}

getDirectories(__dirname).forEach(directory => {
  fs.readdirSync(__dirname+'/'+directory)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      // Extract its content as a Sequelize data type
      const model = require(path.join(__dirname+'/'+directory, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
});

// Associates each model to each other (???)
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
