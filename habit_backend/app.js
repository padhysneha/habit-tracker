import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import habitRoutes from "./routes/habits.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/habits", habitRoutes);

const connection_url =
  "mongodb+srv://admin:i0vyjCBmtSTNUVqj@cluster0.qsmly.mongodb.net/habit-tracker?retryWrites=true&w=majority";

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Listener

app.listen(4000, () => console.log(`Its running on port 4000`));
