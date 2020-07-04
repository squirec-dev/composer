const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const routes = path.join(__dirname, 'routes/');
const port = process.env.PORT || 8080;

app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.get('/',function (req, res) {
//     res.render('pages/home')
// });

// app.use(express.static(path.join(__dirname, 'src')));

fs.readdirSync(routes).forEach(function(file) {
    console.log(`Loading route: ${routes}`);
    const route = routes + file;
    require(route)(app);
});


app.listen(port, () => console.log(`App Started on port ${port}`));