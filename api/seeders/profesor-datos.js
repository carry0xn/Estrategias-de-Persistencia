'use strict';

module.exports = {
    
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('usuario', [
        {
            dni: '33698254',
            nombre: 'Pablo Marcelli',
            email: 'marcellipablo@gmail.com',
            password: '123',
            picture: '--',
            role: 'profesor',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            dni: '34898254',
            nombre: 'Macarena Quiroga',
            email: 'macarena.quiroga@gmail.com',
            password: '123',
            picture: '--',
            role: 'profesor',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            dni: '40698554',
            nombre: 'Javier Rio',
            email: 'javierrio@gmail.com',
            password: '123',
            picture: '--',
            role: 'profesor',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            dni: '43658854',
            nombre: 'Mariano Rean',
            email: 'marianorean@gmail.com',
            password: '123',
            picture: '--',
            role: 'profesor',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            dni: '39668254',
            nombre: 'Daniel Buaon',
            email: 'danielbuaon@gmail.com',
            password: '123',
            picture: '--',
            role: 'profesor',
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('usuario', null, {});
    },
  };