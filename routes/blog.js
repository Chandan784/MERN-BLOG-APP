const express = require('express')

const {getAllBlog,updateBlog,getBlogById,deleteBlog,createBlog, getUserBlogs} = require('../controllers/blog')
const blogRouter = express.Router()


blogRouter.get('/all-blog',getAllBlog)
blogRouter.get('/get-blog/:id',getBlogById)
blogRouter.post('/create-blog',createBlog)
blogRouter.put('/update-blog/:id',updateBlog)
blogRouter.delete('/delete-blog/:id',deleteBlog)
blogRouter.get('/user-blog/:id',getUserBlogs)


module.exports = blogRouter