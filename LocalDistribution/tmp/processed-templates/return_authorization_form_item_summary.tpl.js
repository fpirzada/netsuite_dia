define('return_authorization_form_item_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<label class=\"return-authorization-form-item-summary-quantity-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Quantity to return:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":70},"end":{"line":9,"column":105}}}))
    + "</label>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isQuantityGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":18,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<input class=\"return-authorization-form-item-summary-quantity-field\" data-action=\"quantity\" type=\"number\" name=\"quantity\" data-toggle=\"false\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"selectedQuantity") || (depth0 != null ? compilerNameLookup(depth0,"selectedQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectedQuantity","hash":{},"data":data,"loc":{"start":{"line":11,"column":151},"end":{"line":11,"column":171}}}) : helper)))
    + "\" min=\"1\" max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxQuantity","hash":{},"data":data,"loc":{"start":{"line":11,"column":186},"end":{"line":11,"column":201}}}) : helper)))
    + "\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"of $(0)",(depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":203},"end":{"line":11,"column":238}}}))
    + "\r\n		<p><small class=\"return-authorization-form-item-summary-edit-text\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Edit quantity to return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":69},"end":{"line":12,"column":108}}}))
    + "</small></p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<label class=\"return-authorization-form-item-summary-quantity-label\">\r\n			<br>\r\n			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxQuantity","hash":{},"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":16,"column":20}}}) : helper)))
    + "\r\n		</label>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<label class=\"return-authorization-form-item-summary-quantity-label\">\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Quantity to return:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":21,"column":37}}}))
    + " <br>\r\n		<b>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isQuantityGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":27,"column":9}}})) != null ? stack1 : "")
    + "		</b>\r\n	</label>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) of $(0)",(depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":3},"end":{"line":24,"column":43}}}))
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maxQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maxQuantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maxQuantity","hash":{},"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":26,"column":18}}}) : helper)))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLineActive") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_form_item_summary'; return template;});