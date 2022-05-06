define('order_wizard_showpayments_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"order-wizard-showpayments-module-billing-address\">\r\n			<h3 class=\"order-wizard-showpayments-module-section-header\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Billing Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":35}}}))
    + "\r\n			</h3>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":22,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEditBillingButton") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":27,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"Billing.Address\"></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<a class=\"order-wizard-showpayments-module-billing-address-edit\" data-action=\"edit-module\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"editBillingUrl") || (depth0 != null ? compilerNameLookup(depth0,"editBillingUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"editBillingUrl","hash":{},"data":data,"loc":{"start":{"line":19,"column":100},"end":{"line":19,"column":118}}}) : helper)))
    + "?force=true\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Please select a valid billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":57}}}))
    + "\r\n			</a>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<a class=\"order-wizard-showpayments-module-billing-address-edit\" data-action=\"edit-module\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"editBillingUrl") || (depth0 != null ? compilerNameLookup(depth0,"editBillingUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"editBillingUrl","hash":{},"data":data,"loc":{"start":{"line":24,"column":100},"end":{"line":24,"column":118}}}) : helper)))
    + "?force=true\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to edit billing information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":25,"column":52}}}))
    + "\r\n			</a>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<h3 class=\"order-wizard-showpayments-module-section-header\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Payment Type",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":4},"end":{"line":34,"column":32}}}))
    + "\r\n			</h3>\r\n			<div class=\"order-wizard-showpayments-module-payment-methods-summary\">\r\n				<div data-view=\"PaymentMethods.Collection\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftcertificates") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":4},"end":{"line":42,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestEmail") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":4},"end":{"line":47,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "				<br>\r\n				<b>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificates",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":7},"end":{"line":40,"column":40}}}))
    + "</b><br>\r\n				<div data-view=\"GiftCertificates.Collection\"></div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div>\r\n					<h5>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"guestEmail") || (depth0 != null ? compilerNameLookup(depth0,"guestEmail") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"guestEmail","hash":{},"data":data,"loc":{"start":{"line":45,"column":9},"end":{"line":45,"column":23}}}) : helper)))
    + "</h5>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<section class=\"order-wizard-showpayments-module-details\">\r\n	<div class=\"order-wizard-showpayments-module-details-body\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBilling") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "\r\n		<div class=\"order-wizard-showpayments-module-payment-method\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":3},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_showpayments_module'; return template;});