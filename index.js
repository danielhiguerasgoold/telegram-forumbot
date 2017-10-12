const Telegraf = require('telegraf');
const start = require('./comandos/start');

const app = new Telegraf("470252108:AAEHri_wBBBU4XYrULE7DKgypUfS6zVmozs")

app.command('start', ({ from, reply }) => {
  console.log('start', from),
  start.ejecuta(from);
  return reply("Bienvenido "+from.first_name+" "+from.last_name+" (parguelilla!)")
})
app.hears('holi', (ctx) => ctx.reply('Holi holi holiiii!'))
app.on('sticker', (ctx) => ctx.reply('👍'))
app.startPolling()