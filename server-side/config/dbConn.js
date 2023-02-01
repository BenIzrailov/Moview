const mongoose = require("mongoose");
const DATABASE_URI =
  "mongodb+srv://benizra:Mongoben95.@cluster0.k4rccwj.mongodb.net/MovieDB?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
