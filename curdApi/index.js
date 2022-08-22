const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const expenseRout = require("./router/expeRoute");
const cors = require("cors");

dotenv.config();

// connection to mongodb
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
);

app.use(express.json());
app.use(cors());

app.use("/api/expense", expenseRout);


app.listen(4000, () => console.log("running on port 4000"))