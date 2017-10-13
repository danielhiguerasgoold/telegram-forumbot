require('dotenv').config();

const Telegraf = require('telegraf');
const start = require('./commands/start');
const app = new Telegraf(process.env.BOT_TOKEN);

app.command('start', ({ from, reply }) => {
  console.log('start', from),
  start.execute(from);
  return reply("Bienvenido "+from.first_name+" (parguelilla!)")
});

app.command('forums', ({from, reply}) => {
	console.log('forums', from);

	let forums = require('./commands/forums');

	forums.execute(function(error, data) {
		// Comprobamos si se ha producido un error
		if (error === null) {
			console.log("error");
			reply("Error en el servidor");
		}
		else {
			let mensaje = "Nuestros foros:\n";
			Object.keys(data).forEach(function(i) {
				mensaje += " * "+data[i].name+" \n";
			});
			return reply(mensaje);
		}
	});



});

app.hears('holi', (ctx) => ctx.reply('Holi holi holiiii!'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();