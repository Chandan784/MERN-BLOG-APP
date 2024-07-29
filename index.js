const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

//env config
dotenv.config();

//mongo db connect
connectDB();

//rosutes

const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

const courseRouter = require("./routes/course");
const commentRouter = require("./routes/comment");

//port
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());
console.log(__dirname);

// app.use(express.static('build'))
app.use(morgan("dev"));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/comments", commentRouter);

app.use(express.static(path.resolve(__dirname, "./dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(
    `server started on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white
  );
});
