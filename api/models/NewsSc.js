const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  source: {
    type: Object,
  },
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
  },
});

const NewsIn = mongoose.model("NewsIn", newsSchema, "newsin");
module.exports = NewsIn;
