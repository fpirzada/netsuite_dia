define('return_authorization_cancel.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"return-authorization-cancel-modal\">\r\n	<h4>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Are you sure you want to cancel this return request?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":9,"column":73}}}))
    + "</h4>\r\n	<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"The status of the request will change to \"Cancelled\" but it won't be removed.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":98}}}))
    + "</p>\r\n	<div class=\"return-authorization-cancel-modal-actions\">\r\n		<button class=\"return-authorization-cancel-modal-cancel-button\" data-action=\"delete\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Cancel Return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":13,"column":32}}}))
    + "\r\n		</button>\r\n		<button class=\"return-authorization-cancel-modal-close-button\" data-dismiss=\"modal\" data-action=\"cancel\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Close",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":16,"column":24}}}))
    + "\r\n		</button>\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_cancel'; return template;});