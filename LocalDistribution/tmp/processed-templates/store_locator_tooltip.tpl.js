define('store_locator_tooltip.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<span class=\"store-locator-tooltip-box-distance\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"storeDistance") || (depth0 != null ? compilerNameLookup(depth0,"storeDistance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeDistance","hash":{},"data":data,"loc":{"start":{"line":17,"column":54},"end":{"line":17,"column":71}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"distanceUnit") || (depth0 != null ? compilerNameLookup(depth0,"distanceUnit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"distanceUnit","hash":{},"data":data,"loc":{"start":{"line":17,"column":72},"end":{"line":17,"column":88}}}) : helper)))
    + " </span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<span class=\"store-locator-tooltip-box-address\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"storeAddress") || (depth0 != null ? compilerNameLookup(depth0,"storeAddress") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"storeAddress","hash":{},"data":data,"loc":{"start":{"line":20,"column":53},"end":{"line":20,"column":69}}}) : helper)))
    + " </span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<li class=\"store-locator-tooltip-box\">\r\n	<a href=\"stores/details/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"storeId") || (depth0 != null ? compilerNameLookup(depth0,"storeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeId","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":36}}}) : helper)))
    + "\">\r\n		<span class=\"store-locator-tooltip-box-count\">\r\n			<span>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (depth0 != null ? compilerNameLookup(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":9},"end":{"line":11,"column":18}}}) : helper)))
    + "</span>\r\n		</span>\r\n		<ul class=\"store-locator-tooltip-box-info\">\r\n			<li class=\"store-locator-tooltip-store-name\"><strong>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"storeName") || (depth0 != null ? compilerNameLookup(depth0,"storeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeName","hash":{},"data":data,"loc":{"start":{"line":14,"column":56},"end":{"line":14,"column":69}}}) : helper)))
    + "</strong></li>\r\n			<li class=\"store-locator-tooltip-box-details\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showStoreDistance") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showStoreAddress") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "			</li>\r\n		</ul>\r\n		<a href=\"stores/details/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"storeId") || (depth0 != null ? compilerNameLookup(depth0,"storeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeId","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":37}}}) : helper)))
    + "\" class=\"store-locator-tooltip-box-arrow-container\">\r\n			<i class=\"store-locator-tooltip-box-arrow-icon\"></i>\r\n		</a>\r\n	</a>\r\n</li>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'store_locator_tooltip'; return template;});