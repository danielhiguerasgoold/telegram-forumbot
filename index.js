const Telegraf = require('telegraf');

const app = new Telegraf(process.env.BOT_TOKEN);

app.command('start', ({ from, reply }) => {
  console.log('start', from);
  return reply('Bienvenido parguelilla!');
})
app.hears('holi', (ctx) => ctx.reply('Holi holi holiiii!'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();