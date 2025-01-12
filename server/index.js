const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const port = 3108

app.use(express.static(path.resolve(__dirname, '../client/dist/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(port, function () {
  console.log(`Listening at ${port}!`);
});
