const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//middleware
app.use(express.json({ extended: false }));
app.use(cors());
// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/test", { useUnifiedTopology: true })
  .then(() => {
    console.log("database Connected");
  })
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("hello world");
});

// Routes
const ApplicationRoutes = require("./Routes/ApplicationRoutes");
app.use("/apply", ApplicationRoutes);

//listen server
const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
