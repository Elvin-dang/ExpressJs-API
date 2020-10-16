const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// middlewares
app.use(bodyParser.json());
app.use(cors());

// default
app.get('/', (req, res) => {
    res.send('this is main page');
})

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// connect mongoDB
mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true},
  () => console.log('DB connected'));

//listen
app.listen(3000);