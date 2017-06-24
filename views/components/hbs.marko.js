// Compiled using marko@4.4.16 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_str = marko_helpers.s;

const hbs = require("../../hbs");

function render(input, out) {
  var data = input;

  const output = hbs.handlebars.partials[input.partial](input.data);

  out.w(marko_str(output));
}

marko_template._ = render;

marko_template.meta = {};
