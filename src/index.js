import app from './app.js';
import { PORT } from './config.js'
import cron from 'node-cron'
console.log("Hola_2")

cron.schedule('*/20 * * * * *', () => {
    console.log('running a task every 10 seconds');
  });
app.listen(PORT);
console.log("servidor corriendo en puerto", PORT);