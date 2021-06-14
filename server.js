require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Conntected to Dbase"));

app.use(express.json());

const subscriberRouter = require("./routes/subscribers");
app.use("/subscribers", subscriberRouter);

app.listen(5000, () => console.log("Server started"));
