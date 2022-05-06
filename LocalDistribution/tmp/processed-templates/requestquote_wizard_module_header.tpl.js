define('requestquote_wizard_module_header.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<small class=\"requestquote-wizard-module-header-title-count\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasOneItem") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "			</small>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":5},"end":{"line":15,"column":27}}}))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) items",(depth0 != null ? compilerNameLookup(depth0,"productsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":5},"end":{"line":17,"column":47}}}))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"requestquote-wizard-module-header-title-count-disabled\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No Items Yet",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":32}}}))
    + "\r\n			</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"requestquote-wizard-module-header\">\r\n	<h1 class=\"requestquote-wizard-module-header-title\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request a Quote",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":33}}}))
    + "\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItem") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":24,"column":9}}})) != null ? stack1 : "")
    + "	</h1>\r\n	<button class=\"requestquote-wizard-module-header-title-button\" data-action=\"submit-step\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Submit Quote Request",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":38}}}))
    + "\r\n	</button>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'requestquote_wizard_module_header'; return template;});