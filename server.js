const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const routes = require('./controllers');
require('dotenv').config();
const apiRoutes = require('./controllers/api')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { 

    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

app.get('/', async (req, res) => {
    // res.render('index.html');
    res.send('This is the homepage');
})

app.get('/exercise', async (req, res) => {
    // res.render('exercise.html')
    res.sendFile(path.join(__dirname, './public/exercise.html'))
})

app.get('/stats', async (req, res) => {
    // res.render('stats.html')
    res.sendFile(path.join(__dirname, './public/stats.html'))
})



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

