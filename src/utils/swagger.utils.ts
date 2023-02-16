import swaggerJSDoc from 'swagger-jsdoc';
import { config } from '../config';

const swaggerDefinition = {
  swagger: '2.0',
  info: {
    title: 'REST API',
    version: '1.0.0',
    description: 'Example docs',
  },
  host: `localhost:${config.PORT}`,
  basePath: config.BASE_URL,
  tags: [
    {
      name: 'Health',
      description: '',
    },
    {
      name: 'Users',
      description: 'API for users and admin',
    },
    {
      name: 'Branch',
      description: 'Api For branch crud',
    },
    {
      name: 'Designation',
      description: 'Api For Designation crud',
    },
    {
      name: 'Role',
      description: 'Api For Role crud',
    },
    {
      name: 'UserProfile',
      description: 'Api For UserProfile crud',
    },
  ],
  schemes: ['http', 'https'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    },
  },
  consumes: ['application/json'],
  produces: ['application/json'],
};

const options = {
  swaggerDefinition,
  apis: ['**/*.ts'],
};

export const swaggerSpecs: object = swaggerJSDoc(options);
