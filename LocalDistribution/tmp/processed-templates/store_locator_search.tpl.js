define('store_locator_search.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "store-locator-search-button-after-find";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<div class=\"store-locator-search-buttons-container-or-wrap\">\r\n							<div class=\"store-locator-search-buttons-container-or\" data-type=\"geolocation-or\"><span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"or",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":95},"end":{"line":25,"column":113}}}))
    + "</span></div>\r\n						</div>\r\n						<div class=\"store-locator-search-buttons-container-geolocalization\" data-type=\"geolocation-button\">\r\n							<button type=\"button\" class=\"store-locator-search-button-current\" data-action=\"use-geolocation\">\r\n								<i class=\"store-locator-search-button-current-icon\"></i> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Use Current Location",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":65},"end":{"line":29,"column":101}}}))
    + "\r\n							</button>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<form class=\"store-locator-search\">\r\n	<div class=\"store-locator-search-search-view\">\r\n		<div class=\"store-locator-search-enter-location\">\r\n			\r\n			<div class=\"store-locator-search-group\" data-input=\"city\" data-validation=\"control-group\">\r\n				<label class=\"store-locator-search-group-label\" for=\"city\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Enter Address, Zip Code or City",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":5},"end":{"line":14,"column":52}}}))
    + " \r\n				</label>\r\n				<div class=\"store-locator-search-group-form-controls\" data-validation=\"control\">\r\n					<input id=\"autocomplete\" type=\"text\" name=\"city\" data-type=\"autocomplete-input\" class=\"store-locator-search-input-autocomplete\"/>\r\n				</div>\r\n				<div class=\"store-locator-search-buttons-container\">\r\n					<div class=\"store-locator-search-buttons-container-find\">\r\n						<button class=\"store-locator-search-button-find "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showResults") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":54},"end":{"line":21,"column":118}}})) != null ? stack1 : "")
    + "\" type=\"submit\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Find Stores",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":134},"end":{"line":21,"column":161}}}))
    + "</button>\r\n					</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showUseCurrentLocationButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":5},"end":{"line":32,"column":12}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n\r\n			\r\n			<div class=\"store-locator-search-geolocation\" data-type=\"location-geolocation\">\r\n				<div class=\"store-locator-search-geolocation-message-warning\" data-action=\"message-warning\"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</form>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'store_locator_search'; return template;});