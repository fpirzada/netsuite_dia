define('quote_list_expiration_date.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span class=\"quote-list-expiration-date-overdue\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"duedate") : stack1), depth0))
    + "</span> <i class=\"quote-list-expiration-date-icon-overdue\"></i>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isCloseOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":17,"column":10}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<span class=\"quote-list-expiration-date-closeoverdue\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"duedate") : stack1), depth0))
    + "</span> <i class=\"quote-list-expiration-date-icon-closeoverdue\"></i>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"duedate") : stack1), depth0))
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Not specified",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":20,"column":37}}}))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<span class=\"quote-list-expiration-date\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"duedate") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":21,"column":8}}})) != null ? stack1 : "")
    + "</span>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_list_expiration_date'; return template;});