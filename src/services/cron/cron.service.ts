import axios from 'axios';

const cron = require('node-cron');

export const scheduleReminder = () => {
  cron.schedule('*/1 * * * * *', () => {
    // axios.post('https://hooks.slack.com/services/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', {
    //   text: 'Happy Birthday Ritesh!',
    // }).then((res) => console.log({ res })).catch((err) => console.log({ err }));
    // console.log('---------------------');
    // console.log('running a task every 15 seconds');
  });
};
