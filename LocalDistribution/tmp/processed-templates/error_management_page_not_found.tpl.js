define('error_management_page_not_found.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "background-image: url("
    + container.escapeExpression((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundImage") : stack1),"img/bridge-page-not-found.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":11,"column":138},"end":{"line":11,"column":249}}}))
    + "); ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "background-color: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundColor") : stack1), depth0))
    + ";";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<h1>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0)) != null ? stack1 : "")
    + "</h1>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"pageHeader") : stack1), depth0))
    + "</h1>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<p class=\"error-management-page-not-found-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1), depth0))
    + "</p>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<div class=\"error-management-page-not-found-button-container\">\r\n					<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"btnHref") : stack1), depth0))
    + "\" class=\"error-management-page-not-found-button\">\r\n						"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"btnText") : stack1), depth0))
    + "\r\n					</a>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n\r\n<div class=\"error-management-page-not-found\">\r\n    <div class=\"error-management-page-not-found-header\" style=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundImage") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":63},"end":{"line":11,"column":259}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"backgroundColor") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":259},"end":{"line":11,"column":387}}})) != null ? stack1 : "")
    + "\">\r\n		<div class=\"error-management-page-not-found-caption\">\r\n			<div class=\"error-management-page-not-found-caption-content\">\r\n				<div class=\"error-management-page-not-found-title\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":5},"end":{"line":19,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":5},"end":{"line":22,"column":12}}})) != null ? stack1 : "")
    + "				</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraErrorMgtPageNotFoundView") : depth0)) != null ? compilerNameLookup(stack1,"btnText") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n    </div>\r\n\r\n	<div id=\"error-management-page-not-found-content\" class=\"error-management-page-not-found-content\"></div>\r\n\r\n	<div id=\"error-management-page-not-found-cms\" class=\"error-management-page-not-found-cms\" data-cms-area=\"page_not_found_cms\" data-cms-area-filters=\"page_type\"></div>\r\n</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'error_management_page_not_found'; return template;});