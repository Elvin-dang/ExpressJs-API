const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv/config');

// default
app.get('/', (req, res) => {
    res.send('this is main page');
})

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// connect mongoDB
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });
client.connect(err => {
  console.log('Db connected');
  client.close();
});

//listen
app.listen(3000);