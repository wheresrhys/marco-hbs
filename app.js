require('marko/node-require'); // Allow Node.js to require and load `.marko` files

var express = require('express');
var markoExpress = require('marko/express');
var marko = require('marko');

var hbs = require('express-hbs');
var app = express();

hbs.registerHelper('marko', function (filename, options) {
	const tpl = require(__dirname + '/views/marko-partials/' + filename)
	return tpl.renderSync(this).toString();
});


app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/hbs-partials',
  layoutsDir: __dirname + '/views',
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('page', {
  	layout: 'layout',
  	hbsData: 'hbs content',
  	markoData: 'marko content'
  })
});

app.listen(8080);