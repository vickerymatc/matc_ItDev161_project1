import express from "express";
import connectDB from "./config/db";

// init express
const app = express();
// connect to the database
connectDB();

//end point
app.get("/", (req, res) =>
  res.send("http get request snd to root api endpoint")
);

//connect listener

app.listen(3000, () => console.log(`express erver is running on port 3k`));
