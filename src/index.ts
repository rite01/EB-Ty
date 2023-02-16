import App from './app';
import { scheduleReminder } from './services/cron';

process.on('uncaughtException', (err: Error) => {
  console.log(`UNCAUGHT EXCEPTION! ${err?.name}: ${err?.message}`);
  // loggerService.logger.error(`UNCAUGHT EXCEPTION! ${err?.name}: ${err?.message}`, () => process.exit(1));
});
// import './services/cron';
// Initialize Server
App.bootstrap();
scheduleReminder();
