define('header_menu.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":49,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":62}}})) != null ? stack1 : "")
    + ">\r\n					<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":22,"column":15},"end":{"line":22,"column":24}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":22,"column":26},"end":{"line":22,"column":53}}}))
    + ">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":5},"end":{"line":23,"column":23}}}))
    + "\r\n					</a>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":5},"end":{"line":47,"column":12}}})) != null ? stack1 : "")
    + "				</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-toggle=\"categories-menu\"";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<ul class=\"header-menu-level-container\">\r\n						<li>\r\n							<ul class=\"header-menu-level2\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":43,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\r\n						</li>\r\n					</ul>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "								<li>\r\n									<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":31,"column":19},"end":{"line":31,"column":28}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":31,"column":30},"end":{"line":31,"column":57}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":58},"end":{"line":31,"column":76}}}))
    + "</a>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":9},"end":{"line":41,"column":16}}})) != null ? stack1 : "")
    + "								</li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									<ul class=\"header-menu-level3\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":39,"column":19}}})) != null ? stack1 : "")
    + "									</ul>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "										<li>\r\n											<a class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":37,"column":21},"end":{"line":37,"column":30}}}) : helper)))
    + "\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,depth0,{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":37,"column":32},"end":{"line":37,"column":59}}}))
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":60},"end":{"line":37,"column":78}}}))
    + "</a>\r\n										</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<nav class=\"header-menu-secondary-nav\">\r\n\r\n\r\n\r\n\r\n\r\n	<ul class=\"header-menu-level1\">\r\n		<div class=\"header-logo-wrapper\">\r\n			<div data-view=\"Header.Logo\"></div>\r\n\r\n		</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":50,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n	</ul>\r\n\r\n\r\n</nav>\r\n\r\n<div class=\"right_menu\">\r\n	<div class=\"imgcontainer\">\r\n		<img src=\"https://www.w3schools.com/w3images/avatar6.png\" alt=\"Avatar\" class=\"avatar\">\r\n		<!-- hh -->\r\n	</div>\r\n	<div class=\"header-menu-search\">\r\n		<button class=\"header-menu-search-link active\" data-action=\"show-sitesearch\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":64,"column":86},"end":{"line":64,"column":108}}}))
    + "\">\r\n			<i class=\"header-menu-search-icon\"></i>\r\n		</button>\r\n	</div>\r\n</div>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu'; return template;});