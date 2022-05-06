define('suitecommerce_sizechart_chart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "  <div class=\"size-chart-title\">\n    <h3 class=\"page-header\">\n      "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n    </h3>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSizeChartTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"size-chart-description\">\n  "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n<div class=\"size-chart-definition\">\n  "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"chart") || (depth0 != null ? compilerNameLookup(depth0,"chart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chart","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":15}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/SizeChart/1.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_sizechart_chart'; return template;});