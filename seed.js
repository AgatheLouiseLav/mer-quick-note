require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Note = require('./models/note');

(async function() {
  await Note.deleteMany({});
  await User.deleteMany({});
  const user = await User.create({
	name: 'Agathe',
	email:'aga@email.com',
	password: process.env.PASSWORD_ADMIN
   })
  const notes = await Note.create([
    { text : 'Call company', user: user},
    {text : 'Buy Milk', user: user}
  ]);
  console.log(notes)
  process.exit();

})();