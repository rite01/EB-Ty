import { config as dotEnvConfig } from 'dotenv';

import { getOsEnv, normalizePort } from '../utils/utils';
import { NODE_ENV } from '../constants/enum.constants';

dotEnvConfig({});

export const config = {
  APP_NAME: 'Node',
  NODE_ENV: getOsEnv('NODE_ENV'),
  PORT: normalizePort(getOsEnv('PORT')),
  isProduction: getOsEnv('NODE_ENV') === NODE_ENV.PRODUCTION,
  isDevelopment: getOsEnv('NODE_ENV') === NODE_ENV.DEVELOPMENT,
  BASE_URL: '/api/v1',
  SWAGGER_URL: '/api-docs',
  DB: {
    DB_HOST: getOsEnv('DB_HOST'),
    DB_DATABASE: getOsEnv('DB_DATABASE'),
    DB_PASSWORD: getOsEnv('DB_PASSWORD'),
    DB_USER: getOsEnv('DB_USER'),
    DB_PORT: getOsEnv('DB_PORT'),
  },
  JWT: {
    JWT_SECRET: getOsEnv('JWT_SECRET'),
    JWT_REFRESH_TOKEN: getOsEnv('JWT_REFRESH_TOKEN'),
    EXPIRES_IN: getOsEnv('JWT_EXPIRES_IN'),
    JWT_TOKEN: getOsEnv('JWT_TOKEN'),
    JWT_PRIVATE_KEY: getOsEnv('JWT_PRIVATE_KEY'),
  },
  LOGS: {
    FORMAT: 'dev',
    DIR: '../../logs',
  },
  CORS: {
    ORIGIN: '*',
    CREDENTIALS: true,
  },
//   HASH_SALT: toNumber(getOsEnv('HASH_SALT')),
//   CRYPTO_ROUNDS: toNumber(getOsEnv('CRYPTO_ROUNDS')),
//   RATE_LIMIT: {
//     MAX: 100,
//     WINDOW__MS: 60 * 60 * 1000,
//   },
};
