const express = require("express");
const morgan = require("morgan");
const dotenv = require('dotenv')
const colors = require("colors");
const mongoose = require("mongoose");
const connectDB = require("./config/db")
const cors = require('cors')
console.log(dotenv);

//env config
dotenv.config()

//mongo db connect 
connectDB()

//rosutes

const userRouter = require("./routes/user")
const blogRouter = require("./routes/blog")

//port
const PORT = process.env.PORT 

const app = express();



app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.status(200).send({ message: "server ok" });
// });

app.use('/api/v1/users',userRouter)
app.use('/api/v1/blogs',blogRouter)

app.listen(PORT, () => {
  console.log(`server started on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white);
});
