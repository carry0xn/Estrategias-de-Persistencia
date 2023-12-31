const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sistema de gestion estudiantil - API',
      version: '1.0.0'
    },
  },
  apis: ['swaggerSpec.yaml']
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = { swaggerUI, swaggerSpec }
