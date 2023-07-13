const router = require("express").Router();
const Blog = require("../models/Blog");

router
  .get("", async (request, response) => {
    const blogs = await Blog.find({});
    return response.status(200).json({ blogs });
  })
  .post("", async (request, response) => {
    const body = request.body;
    const published = Date().toString();
    const newBlog = new Blog({ ...body, published });

    try {
      const savedBlog = await newBlog.save();
      return response.status(201).json({ blog: savedBlog }).end();
    } catch (e) {
      return response.status(400).json({ error: e.message }).end();
    }
  });

module.exports = router;
