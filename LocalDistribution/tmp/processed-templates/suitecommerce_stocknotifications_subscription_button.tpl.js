define('suitecommerce_stocknotifications_subscription_button.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <a class=\"stocknotifications-button-small stocknotifications-cancelall-button\"\n    data-action=\"cancel-all-subscriptions\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"undoAllButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "  </a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"undoAllButtonText") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":35}}}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"cancelAllButtonText") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":37}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <a class=\"stocknotifications-button-small stocknotifications-cancel-button\"\n    data-action=\"cancel-subscription\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"deletedSubscription") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "")
    + "  </a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"undoButtonText") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":34}}}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "      "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"cancelButtonText") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":36}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasChildren") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSubscribed") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/StockNotifications/1.1.6/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_stocknotifications_subscription_button'; return template;});