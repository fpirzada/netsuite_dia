define('transaction_line_views_cell_selectable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "transaction-line-views-cell-selectable-multishipto-line-selected";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "						<a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURLAttributes") || (depth0 != null ? compilerNameLookup(depth0,"itemURLAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURLAttributes","hash":{},"data":data,"loc":{"start":{"line":20,"column":9},"end":{"line":20,"column":32}}}) : helper))) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":20,"column":33},"end":{"line":20,"column":45}}}) : helper)))
    + "</a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<span class=\"transaction-line-views-cell-selectable-item-displayname-viewonly\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":22,"column":85},"end":{"line":22,"column":97}}}) : helper)))
    + "</span>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"Item.Options\"></div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"Detail1.View\"></div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDetail1Title") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":41,"column":12}}})) != null ? stack1 : "")
    + "					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail1") || (depth0 != null ? compilerNameLookup(depth0,"detail1") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"detail1","hash":{},"data":data,"loc":{"start":{"line":42,"column":5},"end":{"line":42,"column":16}}}) : helper)))
    + "\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<span class=\"transaction-line-views-cell-selectable-visible-phone\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail1Title") || (depth0 != null ? compilerNameLookup(depth0,"detail1Title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"detail1Title","hash":{},"data":data,"loc":{"start":{"line":40,"column":73},"end":{"line":40,"column":89}}}) : helper)))
    + "</span>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<span class=\"transaction-line-views-cell-selectable-item-unit-price-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2Title") || (depth0 != null ? compilerNameLookup(depth0,"detail2Title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"detail2Title","hash":{},"data":data,"loc":{"start":{"line":48,"column":80},"end":{"line":48,"column":96}}}) : helper)))
    + "</span>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<span class=\"transaction-line-views-cell-selectable-item-amount-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail3Title") || (depth0 != null ? compilerNameLookup(depth0,"detail3Title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"detail3Title","hash":{},"data":data,"loc":{"start":{"line":58,"column":76},"end":{"line":58,"column":92}}}) : helper)))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n	<tr class=\"item-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":8,"column":17},"end":{"line":8,"column":27}}}) : helper)))
    + "  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineSelected") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":29},"end":{"line":8,"column":122}}})) != null ? stack1 : "")
    + "\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":8,"column":138},"end":{"line":8,"column":148}}}) : helper)))
    + "\" data-type=\"row\" data-line-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":8,"column":180},"end":{"line":8,"column":190}}}) : helper)))
    + "\"  data-action=\"select-unselected-item\">\r\n		<td class=\"transaction-line-views-cell-selectable-item-selector\">\r\n				<input data-type=\"checkbox-item-selector\" type=\"checkbox\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineSelected") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":62},"end":{"line":10,"column":98}}})) != null ? stack1 : "")
    + " />\r\n			</td>\r\n\r\n			<td class=\"transaction-line-views-cell-selectable-item-image\">\r\n				<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":55}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\r\n			</td>\r\n			<td class=\"transaction-line-views-cell-selectable-item-details\">\r\n\r\n				<p class=\"transaction-line-views-cell-selectable-item-displayname\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":19,"column":5},"end":{"line":23,"column":12}}})) != null ? stack1 : "")
    + "				</p>\r\n				<div data-view=\"Item.Sku\"></div>\r\n				<p class=\"transaction-line-views-cell-selectable-stock\" data-view=\"ItemViews.Stock.View\">\r\n				</p>\r\n\r\n				<div data-view=\"StockDescription\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOptions") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":33,"column":11}}})) != null ? stack1 : "")
    + "			</td>\r\n			<td class=\"transaction-line-views-cell-selectable-item-qty\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isDetail1Composite") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "			</td>\r\n			<td class=\"transaction-line-views-cell-selectable-item-unit-price\">\r\n				<p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDetail2Title") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":4},"end":{"line":49,"column":11}}})) != null ? stack1 : "")
    + "				<span class=\"transaction-line-views-cell-selectable-item-unit-price-value\">\r\n					"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"detail2") || (depth0 != null ? compilerNameLookup(depth0,"detail2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detail2","hash":{},"data":data,"loc":{"start":{"line":51,"column":5},"end":{"line":51,"column":16}}}) : helper)))
    + "\r\n				</span>\r\n				</p>\r\n			</td>\r\n			<td class=\"transaction-line-views-cell-selectable-item-amount\">\r\n				<p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDetail3Title") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":4},"end":{"line":59,"column":11}}})) != null ? stack1 : "")
    + "				<span class=\"transaction-line-views-cell-selectable-item-amount-value\">\r\n					"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"detail3") || (depth0 != null ? compilerNameLookup(depth0,"detail3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detail3","hash":{},"data":data,"loc":{"start":{"line":61,"column":5},"end":{"line":61,"column":16}}}) : helper)))
    + "\r\n				</span>\r\n				</p>\r\n			</td>\r\n	</tr>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'transaction_line_views_cell_selectable'; return template;});