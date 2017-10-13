const Telegraf = require('telegraf');
const start = require('./commands/start');

const app = new Telegraf("470252108:AAEHri_wBBBU4XYrULE7DKgypUfS6zVmozs");//process.env.BOT_TOKEN);

app.command('start', ({ from, reply }) => {
  console.log('start', from),
  start.execute(from);
  return reply("Bienvenido "+from.first_name+" (parguelilla!)")
})
app.hears('holi', (ctx) => ctx.reply('Holi holi holiiii!'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();