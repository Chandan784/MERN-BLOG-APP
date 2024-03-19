const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to mongodb database ${mongoose.connection.host}`.bgMagenta
    );
  } catch (error) {
    console.log(`MONGO connect error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
