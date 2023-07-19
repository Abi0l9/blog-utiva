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
    const tags = body.tags.split(",")?.map((tag) => tag.toLowerCase());
    const description = body.body.slice(0, 200) + "...";
    const newBlog = new Blog({ ...body, published, tags, description });

    try {
      const savedBlog = await newBlog.save();
      return response.status(201).json({ blog: savedBlog }).end();
    } catch (e) {
      return response.status(400).json({ error: e.message }).end();
    }
  })
  .get("/:blogId", async (request, response) => {
    const blogId = request.params.blogId;
    try {
      const blog = await Blog.findById(blogId);
      if (blog) {
        return response.status(200).json({ blog });
      }
    } catch (e) {
      return response.status(500).json({ error: "Invalid Id" });
    }

    return response.status(404).json({ error: "blog not " });
  })
  .patch("/:blogId", async (request, response) => {
    const blogId = request.params.blogId;
    const update = request.body;
    const extras = {
      edited: true,
      published: Date().toString(),
    };

    const blog = await Blog.findById(blogId);
    if (blog) {
      try {
        await Blog.findByIdAndUpdate(blogId, { ...update, ...extras });
      } catch (e) {
        return response.status(400).json({ error: e.message }).end();
      }

      const newUpdate = { ...blog, ...update };
      return response
        .status(200)
        .json({ message: "Updated Successfully!" })
        .end();
    }

    return response.status(404).json({ error: "blog not found" });
  })
  .delete("/:blogId", async (request, response) => {
    const blogId = request.params.blogId;

    const blog = await Blog.findByIdAndDelete(blogId);
    if (blog) {
      return response.status(200).json({ message: "Deleted Successfully" });
    }
    return response.status(404).json({ error: "blog not found" });
  });

module.exports = router;
