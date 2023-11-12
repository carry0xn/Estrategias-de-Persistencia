module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
        {
          dni: '43345678',
          nombre: 'Crístian Juarez',
          email: 'cristianjuarez@gmail.com',
          password: '321',
          picture: '--',
          role: 'administrador',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          dni: '45765432',
          nombre: 'Carolina Rodriguez Medina',
          email: 'rodriguez@gmail.com',
          password: '321',
          picture: '--',
          role: 'administrador',
          createdAt: new Date(),
          updatedAt: new Date()
      },]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('usuario', null, {});
    },
};