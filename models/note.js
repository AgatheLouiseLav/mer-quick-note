const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  text: {type: String, required: true},
  user: {type: ObjectId  ,unique: true},
	},
   {
	timestamps: true
   }
);

module.exports = mongoose.model('Note', noteSchema);