define('landing_page.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h1>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "	<div id=\"landing-page-content\" class=\"landing-page-content\">\r\n		"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"pageContent") || (depth0 != null ? compilerNameLookup(depth0,"pageContent") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageContent","hash":{},"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":16,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\r\n	</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"landing-page-header\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageHeaderAndNotInModal") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":11,"column":8}}})) != null ? stack1 : "")
    + "	<div id=\"main-banner\" class=\"landing-page-main-banner\"></div>\r\n</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageAndPageContent") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'landing_page'; return template;});