define('print_statement.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"print-statement-button-back\">\r\n	<i class=\"print-statement-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":11,"column":33}}}))
    + "\r\n	</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"print-statement\">\r\n\r\n	<h2 class=\"print-statement-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":17,"column":35},"end":{"line":17,"column":49}}}) : helper)))
    + "</h2>\r\n	<div class=\"print-statement-alert-placeholder\" data-type=\"alert-placeholder\"></div>\r\n\r\n	<form class=\"print-statement-form\">\r\n\r\n		<small class=\"print-statement-form-label\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":23,"column":27}}}))
    + "\r\n			<span class=\"print-statement-form-label-required\">*</span>\r\n		</small>\r\n\r\n		<div class=\"print-statement-form-group\" data-validation=\"control-group\">\r\n			<label class=\"print-statement-form-group-label\" for=\"statementDate\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Statement date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":29,"column":34}}}))
    + "\r\n				<span class=\"print-statement-form-label-required\">*</span>\r\n			</label>\r\n			<div  class=\"print-statement-form-controls\" data-validation=\"control\">\r\n				<input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"statementDate\" name=\"statementDate\" class=\"print-statement-form-group-input\" autocomplete=\"off\" data-todayhighlight=\"true\"/>\r\n				<i class=\"print-statement-form-input-icon\"></i>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"print-statement-form-group\" data-validation=\"control-group\">\r\n			<label class=\"print-statement-form-group-label\" for=\"startDate\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Start date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":40,"column":30}}}))
    + "\r\n				<span class=\"print-statement-form-group-label-optional\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":60},"end":{"line":41,"column":86}}}))
    + "</span>\r\n			</label>\r\n			<div  class=\"print-statement-form-controls\" data-validation=\"control\">\r\n				<input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"startDate\" name=\"startDate\" class=\"print-statement-form-group-input\" autocomplete=\"off\" data-todayhighlight=\"true\"/>\r\n				<i class=\"print-statement-form-input-icon\"></i>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"print-statement-form-group\">\r\n			<div class=\"print-statement-form-controls\">\r\n				<label class=\"print-statement-form-checkbox-label\">\r\n					<input type=\"checkbox\" name=\"inCustomerLocale\"/>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Print in customer's locale",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":5},"end":{"line":53,"column":48}}}))
    + "\r\n				</label>\r\n				<label class=\"print-statement-form-checkbox-label\">\r\n					<input type=\"checkbox\" name=\"openOnly\"/>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Show only Open Transactions",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":57,"column":5},"end":{"line":57,"column":48}}}))
    + "\r\n				</label>\r\n				<label class=\"print-statement-form-checkbox-label\">\r\n					<input type=\"checkbox\" name=\"consolidatedStatement\"/>\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Consolidated Statement",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":61,"column":5},"end":{"line":61,"column":43}}}))
    + "\r\n				</label>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"print-statement-form-actions\">\r\n			<button type=\"submit\" class=\"print-statement-form-actions-print\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":67,"column":68},"end":{"line":67,"column":99}}}))
    + "</button>\r\n			<button type=\"button\" class=\"print-statement-form-actions-email\" data-action=\"email\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":68,"column":88},"end":{"line":68,"column":109}}}))
    + "</button>\r\n		</div>\r\n\r\n	</form>\r\n\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'print_statement'; return template;});