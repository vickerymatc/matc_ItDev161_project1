import express from "express";
import connectDB from "./config/db";
import { check } from "express-validator";
import { validationResult } from "express-validator";

// init express
const app = express();
// connect to the database
connectDB();
//config middleWare
app.use(express.json({ extended: false }));

// api endpoints
//get
app.get("/", (req, res) =>
  res.send("http get request snd to root api endpoint")
);
//post
app.post(
  "/api/users",
  [
    check("name", "please enter your name").not().isEmpty(),
    check("email", "please enter a vlaid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or mor characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      return res.send(req.body);
    }
  }
);

//connect listener

app.listen(3000, () => console.log(`express erver is running on port 3k`));
