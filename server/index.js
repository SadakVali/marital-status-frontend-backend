// importing the packages
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const expressFileupload = require("express-fileupload");

// // importing the routes
// const contactUsRoutes = require("./routes/contact");
// const venueRoutes = require("./routes/venue");
// const dashboardRoutes = require("./routes/dashboard");
// const bookingRoutes = require("./routes/booking");
// const authRoutes = require("./routes/auth");

// importing the configurations
const dotenv = require("dotenv");
const mongodbConnection = require("./config/mongodbConnection");
const { cloudinaryConnect } = require("./config/cloudinary");

// inintializing environment variables and locale variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// creating an instance of express
const app = express();

// to connect the mongoDB database
mongodbConnection.connect();

// to connect to the cloudinary
cloudinaryConnect();

// adding middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  expressFileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// // routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/venue", venueRoutes);
// app.use("/api/v1/booking", bookingRoutes);
// app.use("/api/v1/dashboard", dashboardRoutes);
// app.use("/api/v1/reach", contactUsRoutes);

// define initial route
app.get("/", (req, res) =>
  res.status(200).json({
    success: true,
    message: "Your server is up and running...",
  })
);

// activate the server
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
