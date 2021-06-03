const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

// require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));
 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

