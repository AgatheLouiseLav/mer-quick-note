const Note = require('../../models/note');

module.exports = {
//  create,
  index
};

//async function create(req, res) {
//  const notes = await Item.find({}).sort('name').populate('category').exec();
//  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//  res.json(items);
//}

async function index(req, res) {
	console.log(req.params)
 	 const note = await Note.find({user: req.params.userId});
  res.json(note);
}
