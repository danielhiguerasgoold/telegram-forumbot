require('dotenv').config();

const Telegraf = require('telegraf');
const start = require('./commands/start');
let ForumsDAO = require('./commands/forums');
const app = new Telegraf(process.env.BOT_TOKEN);

app.command('start', ({ from, reply }) => {
  console.log('start', from),
  start.execute(from);
  return reply("Bienvenido "+from.first_name+" (parguelilla!)")
});

app.command('forums', ({from, reply}) => {
	console.log('forums', from);

  ForumsDAO.getAllForums(function(error, data) {
		// Comprobamos si se ha producido un error
		if (error === null) {
			console.log("error");
			reply("Error en el servidor");
		}

    const testMenu = Telegraf.Extra
                              .markdown()
                              .markup((m) => {
                                let forumsList = [];
                                Object.keys(data).forEach(function(i) {
                                  forumsList.push(m.callbackButton(data[i].name, data[i].name));
                                });

                                return m.inlineKeyboard(forumsList);
                              });

    return reply("Nuestros foros:", testMenu);
	});
});

app.startPolling();