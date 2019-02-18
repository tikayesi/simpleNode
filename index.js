var express = require ('express'),
app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

var bootcamp_batch = require('./router/bootcamp_batchRoute');
bootcamp_batch(app);

app.listen(port);
console.log("running on port " + port);