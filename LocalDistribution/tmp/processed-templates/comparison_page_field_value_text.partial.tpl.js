define('comparison_page_field_value_text.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-type\">\n  "
    + ((stack1 = (compilerNameLookup(helpers,"getFormattedText")||(depth0 && compilerNameLookup(depth0,"getFormattedText"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),(depth0 != null ? compilerNameLookup(depth0,"field") : depth0),{"name":"getFormattedText","hash":{},"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":35}}})) != null ? stack1 : "")
    + "\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_field_value_text.partial'; return template;});