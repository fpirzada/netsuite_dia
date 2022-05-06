define('order_wizard_paymentmethod_paypal_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n	<p>\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You have <b>selected to pay using PayPal</b> as your payment method.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":86}}}))
    + "\r\n	</p>\r\n	<p>\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"To <b>review</b> your order, click the <b>\"Continue\" button</b> below.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":2},"end":{"line":30,"column":88}}}))
    + "\r\n	</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<p>\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Please select the <b>\"Continue To PayPal\" button</b> below to <b>sign in into your PayPal</b> account.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":34,"column":120}}}))
    + "\r\n	</p>\r\n	<p>\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You will be <b>redirected to PayPal</b>, but <b>will have an opportunity to review</b> your order back on our site before purchasing.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":2},"end":{"line":37,"column":151}}}))
    + "\r\n	</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n<div class=\"order-wizard-paymentmethod-paypal-module-row\">\r\n\r\n	<a class=\"order-wizard-paymentmethod-paypal-module-container order-wizard-paymentmethod-paypal-module-container-selected\">\r\n		<input type=\"radio\" name=\"paymentmethod-paypal-option\" class=\"order-wizard-paymentmethod-paypal-module-radio\" data-id=\"paypal\" value=\"paypal\" checked>\r\n		<b>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Selected",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":5},"end":{"line":12,"column":29}}}))
    + "</b>\r\n	</a>\r\n	<div class=\"order-wizard-paymentmethod-paypal-module-details order-wizard-paymentmethod-paypal-module-container-selected\">\r\n		<div class=\"order-wizard-paymentmethod-paypal-module-details-container\">\r\n			<img class=\"order-wizard-paymentmethod-paypal-module-paypal-logo\" src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"paypalImageUrl") : depth0),"img/paypal.png",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":16,"column":74},"end":{"line":16,"column":139}}}))
    + "\" alt=\"PayPal\">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n<div class=\"order-wizard-paymentmethod-paypal-module-description\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPaypalComplete") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":24,"column":1},"end":{"line":39,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_paypal_module'; return template;});