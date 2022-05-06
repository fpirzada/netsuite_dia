define('suitecommerce_sizechart_page.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " rendered-in-modal ";
},"3":function(container,depth0,helpers,partials,data) {
    return " container ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"page-title\">\n        <h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageTitle") || (depth0 != null ? compilerNameLookup(depth0,"pageTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageTitle","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":25}}}) : helper)))
    + "</h1>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"size-chart-details\" class=\"size-chart-details-section\">\n  <div id=\"size-chart-data-wrapper\" class=\"size-chart-data-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRenderedInModal") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":67},"end":{"line":2,"column":138}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRenderedInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + "    <div class=\"size-chart-container\" id=\"size-chart-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sizeChartId") || (depth0 != null ? compilerNameLookup(depth0,"sizeChartId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sizeChartId","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":68}}}) : helper)))
    + "\" data-view=\"SizeCharts.View\">\n    </div>\n  </div>\n</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/SizeChart/1.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_sizechart_page'; return template;});