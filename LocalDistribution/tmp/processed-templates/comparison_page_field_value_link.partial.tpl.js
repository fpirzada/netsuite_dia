define('comparison_page_field_value_link.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "<div class=\"link-type\">\n  <a href=\""
    + container.escapeExpression((compilerNameLookup(helpers,"getFieldValueForItem")||(depth0 && compilerNameLookup(depth0,"getFieldValueForItem"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"fieldId") : stack1),{"name":"getFieldValueForItem","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":54}}}))
    + "\" target=\"_blank\">\n    "
    + ((stack1 = (compilerNameLookup(helpers,"getFormattedLink")||(depth0 && compilerNameLookup(depth0,"getFormattedLink"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),(depth0 != null ? compilerNameLookup(depth0,"field") : depth0),{"name":"getFormattedLink","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":37}}})) != null ? stack1 : "")
    + "\n  </a>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_field_value_link.partial'; return template;});