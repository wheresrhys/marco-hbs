var hbs = require('express-hbs');


hbs.registerHelper('marko', function (filename, options) {
	const tpl = require(__dirname + '/views/marko-partials/' + filename)
	return tpl.renderSync(this).toString();
});

module.exports = hbs;