const Note = require('../../models/note');

module.exports = {
  create,
  index
};

async function create(req, res) {
  	const newNote = await Note.create(req.body);
  	res.json(newNote);
}

async function index(req, res) {
	console.log(req.params)
 	 const note = await Note.find({user: req.params.userId});
  res.json(note);
}
