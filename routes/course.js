const express = require("express");

const { getAllCourse } = require("../controllers/course");
const courseRouter = express.Router();

const { restrictToLoginUserOnly } = require("../middlewares/auth");

courseRouter.get("/all-course", getAllCourse);
// blogRouter.get('/get-blog/:id',getBlogById)
// blogRouter.post('/create-blog',createBlog)
// blogRouter.put('/update-blog/:id',updateBlog)
// blogRouter.delete('/delete-blog/:id',deleteBlog)
// blogRouter.get('/user-blog/:id',getUserBlogs)

module.exports = courseRouter;
