define('suitecommerce_stocknotifications_subscription_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    <h4 class=\"stocknotifications-subtitle\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"emptyState") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":44},"end":{"line":9,"column":68}}}))
    + "</h4>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"subscriptionList") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"stocknotifications-wrapper\">\n      <table class=\"stocknotifications-details\">\n        <thead class=\"stocknotifications-table-head\">\n          <tr>\n            <th class=\"stocknotifications-table-th\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemColumnLabel") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":52},"end":{"line":16,"column":81}}}))
    + "</th>\n            <th class=\"stocknotifications-table-th\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"priceColumnLabel") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":52},"end":{"line":17,"column":82}}}))
    + "</th>\n            <th class=\"stocknotifications-table-th\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"statusColumnLabel") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":52},"end":{"line":18,"column":83}}}))
    + "</th>\n          </tr>\n        </thead>\n        <tbody\n          class=\"stocknotifications-table-body\"\n          data-view=\"StockNotifications.Subscription.Line\"\n        >\n        </tbody>\n      </table>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"stocknotifications-list-lists\">\n  <div data-type=\"alert-placeholder\" class=\"stocknotifications-message\"></div>\n\n  <header class=\"stocknotifications-header\">\n    <h2 class=\"stocknotifications-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageTitle") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":64}}}))
    + "</h2>\n  </header>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"noSubscriptions") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/StockNotifications/1.1.6/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_stocknotifications_subscription_list'; return template;});