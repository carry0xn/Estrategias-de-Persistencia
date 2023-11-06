module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('administrador', [
        {
          dni: '43345678',
          nombre: 'Cristian Juarez',
          email: 'cristianjuarez@gmail.com',
          password: '321',
          picture: '--',
      },
      {
          dni: '45765432',
          nombre: 'Carolina Rodriguez Medina',
          email: 'rodriguez@gmail.com',
          password: '321',
          picture: '--',
      },   
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('administrador', null, {});
    },
};