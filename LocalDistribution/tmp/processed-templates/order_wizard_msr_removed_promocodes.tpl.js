define('order_wizard_msr_removed_promocodes.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"code") || (depth0 != null ? compilerNameLookup(depth0,"code") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"code","hash":{},"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":13,"column":9}}}) : helper)))
    + "&nbsp;\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"order-wizard-msr-removed-promocodes\">\r\n"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sorry, we don't currently support the following promotions and will be removed when shipping to multiple addresses:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":9,"column":132}}}))
    + "\r\n<br />\r\n<span class=\"order-wizard-msr-removed-promocodes-list\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"invalidPromocodes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "</span>\r\n<br /><br />\r\n<span class=\"order-wizard-msr-removed-promocodes-question\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"How would you like to proceed?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":59},"end":{"line":17,"column":105}}}))
    + "</span>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_msr_removed_promocodes'; return template;});