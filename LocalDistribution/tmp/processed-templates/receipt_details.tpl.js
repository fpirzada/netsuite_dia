define('receipt_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"/purchases/view/$(1)/$(2)\" class=\"receipt-details-back-btn\">&lt; Back to $(0)</a>",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":9,"column":188}}}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/transactionhistory\" class=\"receipt-details-back-btn\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":64},"end":{"line":11,"column":112}}}))
    + "\r\n	</a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"receipt-details-accordion-divider\">\r\n				<div class=\"receipt-details-accordion-head\">\r\n					<a class=\"receipt-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#receipt-products-list\" aria-expanded=\"true\" aria-controls=\"#receipt-products-list\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLinesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":53,"column":6},"end":{"line":57,"column":13}}})) != null ? stack1 : "")
    + "					<i class=\"receipt-details-accordion-toggle-icon\"></i>\r\n					</a>\r\n				</div>\r\n				<div class=\"receipt-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":56},"end":{"line":61,"column":92}}})) != null ? stack1 : "")
    + "\" id=\"receipt-products-list\" role=\"tabpanel\" data-target=\"#receipt-products-list\">\r\n					<div class=\"receipt-details-accordion-container\" data-content=\"order-items-body\">\r\n						<table class=\"receipt-details-item-details-table\">\r\n							<tbody data-view=\"Item.Details.Line\"></tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Products (<span class=\"receipt-details-items-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":7},"end":{"line":54,"column":99}}}))
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Product (<span class=\"receipt-details-items-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":56,"column":7},"end":{"line":56,"column":98}}}))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "in";
},"12":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"FormatPaymentMethod\"></div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "									"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":91,"column":9},"end":{"line":91,"column":28}}}))
    + "\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Address.View\"></div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":131,"column":9},"end":{"line":131,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":131,"column":33},"end":{"line":131,"column":54}}}))
    + "\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":133,"column":9},"end":{"line":133,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":133,"column":33},"end":{"line":133,"column":53}}}))
    + "\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\r\n						<span class=\"receipt-details-summary-amount-discount\">\r\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discountTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"discountTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"discountTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":142,"column":6},"end":{"line":142,"column":32}}}) : helper)))
    + "\r\n						</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":144,"column":7},"end":{"line":144,"column":31}}}))
    + "\r\n					</p>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\r\n						<span class=\"receipt-details-summary-amount-shipping\">\r\n							<span class=\"receipt-details-summary-shippingcost\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shippingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"shippingCostFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"shippingCostFormatted","hash":{},"data":data,"loc":{"start":{"line":151,"column":58},"end":{"line":151,"column":83}}}) : helper)))
    + "</span>\r\n						</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":153,"column":6},"end":{"line":153,"column":36}}}))
    + "\r\n					</p>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\r\n						<span class=\"receipt-details-summary-amount-handling\">\r\n							"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"handlingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"handlingCostFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"handlingCostFormatted","hash":{},"data":data,"loc":{"start":{"line":160,"column":7},"end":{"line":160,"column":32}}}) : helper)))
    + "\r\n						</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Handling Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":162,"column":6},"end":{"line":162,"column":36}}}))
    + "\r\n					</p>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\r\n						<span class=\"receipt-details-summary-amount-promocode\">\r\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"promocode") || (depth0 != null ? compilerNameLookup(depth0,"promocode") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"promocode","hash":{},"data":data,"loc":{"start":{"line":169,"column":6},"end":{"line":169,"column":19}}}) : helper)))
    + "\r\n						</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Promo Code",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":171,"column":6},"end":{"line":171,"column":32}}}))
    + "\r\n					</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"haveCreatedFrom") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "<section>\r\n	<header>\r\n		<h2 class=\"receipt-details-order-title\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Receipt <span class=\"tranid\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"orderNumber") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":72}}}))
    + "\r\n			<span class=\"receipt-details-title-header-amount\">\r\n				"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":22}}}) : helper)))
    + "\r\n			</span>\r\n		</h2>\r\n		\r\n	</header>\r\n\r\n	<!-- HEADER INFORMATION -->\r\n	<div class=\"receipt-details-header-information\">\r\n		<div class=\"receipt-details-header-row\">\r\n			<div class=\"receipt-details-header-col-left\">\r\n				<p class=\"receipt-details-header-date-info\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"receipt-details-header-date-label\">Date: </span> <span class=\"receipt-details-header-date\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"date") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":5},"end":{"line":30,"column":141}}}))
    + "\r\n				</p>\r\n			</div>\r\n			<div class=\"receipt-details-header-col-right\">\r\n				<p class=\"receipt-details-header-status-info\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"receipt-details-header-status-label\">Status: </span> <span class=\"receipt-details-header-status\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"status") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":5},"end":{"line":35,"column":149}}}))
    + "\r\n				</p>\r\n			</div>\r\n			<div class=\"receipt-details-header-amount\">\r\n				<p class=\"receipt-details-header-amount-info\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"receipt-details-header-amount-label\">Amount: </span> <span class=\"receipt-details-header-amount-number\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":5},"end":{"line":40,"column":164}}}))
    + "\r\n				</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"receipt-details-row\">\r\n		<div class=\"receipt-details-content-col\">\r\n			<!-- ITEMS -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":3},"end":{"line":69,"column":10}}})) != null ? stack1 : "")
    + "\r\n			<div class=\"receipt-details-accordion-divider\">\r\n				<!-- PAYMENT INFORMATION -->\r\n				<div class=\"receipt-details-accordion-head\">\r\n					<a class=\"receipt-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#receipt-payment-info\" aria-expanded=\"true\" aria-controls=\"#receipt-payment-info\">\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":75,"column":6},"end":{"line":75,"column":41}}}))
    + "\r\n						<i class=\"receipt-details-accordion-toggle-icon\"></i>\r\n					</a>\r\n				</div>\r\n\r\n				<div class=\"receipt-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":56},"end":{"line":80,"column":92}}})) != null ? stack1 : "")
    + "\" id=\"receipt-payment-info\" role=\"tabpanel\" data-target=\"#receipt-payment-info\">\r\n					<div class=\"receipt-details-accordion-container\" data-content=\"order-items-body\">\r\n						<div class=\"receipt-details-info-card\">\r\n							<h5 class=\"receipt-details-info-card-title\">\r\n									"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Method:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":84,"column":9},"end":{"line":84,"column":40}}}))
    + "\r\n							</h5>\r\n		\r\n							<div class=\"receipt-details-info-card-info\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":88,"column":8},"end":{"line":92,"column":15}}})) != null ? stack1 : "")
    + "							</div>\r\n						</div>\r\n											\r\n						<div class=\"receipt-details-info-card\">\r\n							<h5 class=\"receipt-details-info-card-title\">\r\n									"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Bill to:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":98,"column":9},"end":{"line":98,"column":33}}}))
    + "\r\n							</h5>\r\n		\r\n							<div class=\"receipt-details-info-card-info-billing\">\r\n								<address>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":103,"column":8},"end":{"line":107,"column":15}}})) != null ? stack1 : "")
    + "								</address>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n\r\n		<div class=\"receipt-details-summary-col\">\r\n			<div class=\"receipt-details-summary-container\">\r\n					<!-- SUMMARY -->\r\n					<h3 class=\"receipt-details-summary-title\">\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"SUMMARY",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":121,"column":6},"end":{"line":121,"column":29}}}))
    + "\r\n					</h3>\r\n					<div class=\"receipt-details-summary-subtotal\">\r\n						<p class=\"receipt-details-summary-grid-float\">\r\n							<span class=\"receipt-details-summary-amount-subtotal\">\r\n								"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"subTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":126,"column":8},"end":{"line":126,"column":29}}}) : helper)))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":128,"column":7},"end":{"line":128,"column":31}}}))
    + "\r\n							<span class=\"receipt-details-summary-subtotal-items\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemsQuantityLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":130,"column":8},"end":{"line":134,"column":15}}})) != null ? stack1 : "")
    + "							</span>\r\n						</p>\r\n					</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscountTotal") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":139,"column":5},"end":{"line":146,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showShippingCost") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":148,"column":5},"end":{"line":155,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":157,"column":5},"end":{"line":164,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":166,"column":5},"end":{"line":173,"column":12}}})) != null ? stack1 : "")
    + "\r\n					<p class=\"receipt-details-summary-grid-float\">\r\n						<span class=\"receipt-details-summary-amount-tax\">\r\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"taxTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"taxTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"taxTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":177,"column":6},"end":{"line":177,"column":27}}}) : helper)))
    + "\r\n						</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":179,"column":6},"end":{"line":179,"column":31}}}))
    + "\r\n					</p>\r\n\r\n					<div class=\"receipt-details-summary-total\">\r\n						<p class=\"receipt-details-summary-grid-float\">\r\n							<span class=\"receipt-details-summary-amount-total\">\r\n								"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data,"loc":{"start":{"line":185,"column":8},"end":{"line":185,"column":26}}}) : helper)))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":187,"column":7},"end":{"line":187,"column":28}}}))
    + "\r\n						</p>\r\n					</div>	\r\n				</div>\r\n\r\n				<!-- DOWNLOAD AS PDF -->\r\n				<div class=\"receipt-details-row-fluid\">\r\n					<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pdfUrl","hash":{},"data":data,"loc":{"start":{"line":194,"column":14},"end":{"line":194,"column":24}}}) : helper)))
    + "\" target=\"_blank\" class=\"receipt-details-button-download-pdf\">\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":195,"column":6},"end":{"line":195,"column":37}}}))
    + "\r\n					</a>\r\n				</div>\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'receipt_details'; return template;});