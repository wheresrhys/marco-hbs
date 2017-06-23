// Compiled using marko@4.4.16 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_str = marko_helpers.s;

function render(input, out) {
  var data = input;

  out.w("<p>" +
    marko_str(input.markoData) +
    "</p>");
}

marko_template._ = render;

marko_template.meta = {};
