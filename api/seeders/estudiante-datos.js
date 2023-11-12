module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
        {
          dni: '12345678',
          nombre: 'Lucía González',
          email: 'luciagonzalez@gmail.com',
          password: '123',
          picture: '--',
          role: 'estudiante',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          dni: '49765432',
          nombre: 'Juan Pérez',
          email: 'juanperez@gmail.com',
          password: '123',
          picture: '--',
          role: 'estudiante',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          dni: '55555555',
          nombre: 'Ana Martínez',
          email: 'anamartinez@gmail.com',
          password: '123',
          picture: '--',
          role: 'estudiante',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          dni: '11112222',
          nombre: 'Carlos Sánchez',
          email: 'carlossanchez@gmail.com',
          password: '123',
          picture: '--',
          role: 'estudiante',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          dni: '99990000',
          nombre: 'Laura Rodríguez',
          email: 'laurarodriguez@gmail.com',
          password: '123',
          picture: '--',
          role: 'estudiante',
          createdAt: new Date(),
          updatedAt: new Date()
      }      
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('usuario', null, {});
    },
};