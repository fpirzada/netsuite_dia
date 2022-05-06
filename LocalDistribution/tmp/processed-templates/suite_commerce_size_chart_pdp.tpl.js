define('suite_commerce_size_chart_pdp.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"size-chart-link-container\">\n        <a href=\"/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sizeChartPageURL") || (depth0 != null ? compilerNameLookup(depth0,"sizeChartPageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sizeChartPageURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":38}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sizeChartUrlComponent") || (depth0 != null ? compilerNameLookup(depth0,"sizeChartUrlComponent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sizeChartUrlComponent","hash":{},"data":data,"loc":{"start":{"line":3,"column":39},"end":{"line":3,"column":64}}}) : helper)))
    + "/\"\n           data-action=\"openSizeChart\"\n           title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"hyperlinkText") || (depth0 != null ? compilerNameLookup(depth0,"hyperlinkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hyperlinkText","hash":{},"data":data,"loc":{"start":{"line":5,"column":18},"end":{"line":5,"column":35}}}) : helper)))
    + "\"\n           class=\"open-size-chart-action\"\n           data-sizechartid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sizeChartId") || (depth0 != null ? compilerNameLookup(depth0,"sizeChartId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sizeChartId","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":44}}}) : helper)))
    + "\">\n            "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"hyperlinkText") || (depth0 != null ? compilerNameLookup(depth0,"hyperlinkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hyperlinkText","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":29}}}) : helper)))
    + "\n        </a>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isAssociatedToSizeChart") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/SizeChart/1.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suite_commerce_size_chart_pdp'; return template;});