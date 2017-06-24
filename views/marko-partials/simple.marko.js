// Compiled using marko@4.4.16 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    hbs_template = marko_loadTemplate(require.resolve("../components/hbs.marko")),
    marko_loadTag = marko_helpers.t,
    hbs_tag = marko_loadTag(hbs_template);

function render(input, out) {
  var data = input;

  out.w("<p>Marko: " +
    marko_escapeXml(input.markoData) +
    "</p>");

  hbs_tag({
      partial: "nested",
      data: input
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/hbs.marko"
    ]
  };
