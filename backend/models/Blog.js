const { Schema, model } = require("mongoose");

const BlogSchema = Schema({
  title: {
    type: String,
    required: [true, "Title is reuired"],
  },
  description: String,
  body: {
    type: String,
    required: [true, "Blog body is required"],
  },
  published: String,
  author: {
    type: String,
    default: "Anonymous",
  },
});

const Blog = model("Blog", BlogSchema);
module.exports = Blog;
