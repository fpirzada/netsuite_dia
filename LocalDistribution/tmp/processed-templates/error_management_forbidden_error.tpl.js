define('error_management_forbidden_error.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":20}}}) : helper)))
    + "</h1>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "\n<div class=\"error-management-forbidden-error\">\r\n    <div class=\"error-management-forbidden-error-header\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":12,"column":8}}})) != null ? stack1 : "")
    + "	\r\n    	<div id=\"main-banner\" class=\"error-management-forbidden-error-main-banner\"></div>\r\n    </div>\r\n    <div id=\"forbidden-error-content\" class=\"error-management-forbidden-error-content\">\r\n    	<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sorry! You have no permission to view this page.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":72}}}))
    + "</p>\r\n    	<p>"
    + ((stack1 = (compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Please contact the website administrator, click <a href=\"/\">here</a> to continue.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":18,"column":107}}})) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'error_management_forbidden_error'; return template;});