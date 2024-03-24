const express = require("express");
const morgan = require("morgan");
const dotenv = require('dotenv')
const colors = require("colors");
const mongoose = require("mongoose");
const connectDB = require("./config/db")
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')



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

app.use(cors({origin:true,credentials:true}))
app.use(express.json());
app.use(express.json());
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
app.use(morgan("dev"));
app.use('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,"build",'index.html'))
})

// app.get("/", (req, res) => {
//   res.status(200).send({ message: "server ok" });
// });
app.get('/', (req,res)=>{
        res.status(200).send("sucess")
})

app.use('/api/v1/users',userRouter)
app.use('/api/v1/blogs',blogRouter)

app.listen(PORT, () => {
  console.log(`server started on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white);
});


