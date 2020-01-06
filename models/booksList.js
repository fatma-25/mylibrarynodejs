const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookListSchema = new schema({
  image: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  raiting: { type: String },
  description: { type: String, required: true },
  categorie:{ type: String, required: true },
  filename:{ type: String, required: true }

});

module.exports = BookList = mongoose.model("bookList", bookListSchema);