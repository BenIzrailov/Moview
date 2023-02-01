require("dotenv").config();
const express = require("express");
const upcomingAPI = require("./movielist");
var http = require("http");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

//connect DB
connectDB();

// custom middleware logger
app.use(logger);

// Create the app
const app = express();
const server = http.createServer(app);
// const io = socketio(server);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// Add json parsing middleware
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.get("/upcoming", async (req, res) => {
  try {
    const upcoming = await upcomingAPI.getUpcoming();
    const { data } = upcoming;
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

// routes
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use(verifyJWT);
app.use("/users", require("./routes/api/users"));

// Initialize application port
const port = 5000;

// io.on("connection", (socket) => {
//   console.log("A Connection has been made");
//   socket.on("disconnect", () => {
//     console.log("A disconnection has been made");
//   });
// });

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// asyncApiCall()
