define('global_views_pagination.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"global-views-pagination\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageIndicator") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":12,"column":8}}})) != null ? stack1 : "")
    + "\r\n	<ul class=\"global-views-pagination-links "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaginationLinksCompactClass") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":42},"end":{"line":14,"column":127}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageDifferentThan1") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageList") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":2},"end":{"line":54,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageLast") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":56,"column":2},"end":{"line":68,"column":9}}})) != null ? stack1 : "")
    + "	</ul>\r\n</nav>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	<p class=\"global-views-pagination-count\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) of $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentPage") : depth0),(depth0 != null ? compilerNameLookup(depth0,"totalPages") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":42},"end":{"line":11,"column":93}}}))
    + "</p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " global-views-pagination-links-compact ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-prev\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"previousPageURL") || (depth0 != null ? compilerNameLookup(depth0,"previousPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"previousPageURL","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":31}}}) : helper)))
    + "\">\r\n				<i class=\"global-views-pagination-prev-icon\"></i>\r\n			</a>\r\n		</li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-prev-disabled\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":30}}}) : helper)))
    + "\">\r\n				<i class=\"global-views-pagination-prev-icon\"></i>\r\n			</a>\r\n		</li>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRangeStartGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":35,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":2},"end":{"line":47,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRangeEndLowerThanTotalPages") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":53,"column":9}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-disabled\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":30}}}) : helper)))
    + "\">...</a>\r\n		</li>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageActivePage") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":38,"column":2},"end":{"line":46,"column":9}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"global-views-pagination-links-number\">\r\n			<a class=\"global-views-pagination-active\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fixedURL") || (depth0 != null ? compilerNameLookup(depth0,"fixedURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fixedURL","hash":{},"data":data,"loc":{"start":{"line":40,"column":51},"end":{"line":40,"column":63}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageIndex") || (depth0 != null ? compilerNameLookup(depth0,"pageIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageIndex","hash":{},"data":data,"loc":{"start":{"line":40,"column":65},"end":{"line":40,"column":78}}}) : helper)))
    + "</a>\r\n		</li>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"global-views-pagination-links-number\">\r\n			<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"URL") || (depth0 != null ? compilerNameLookup(depth0,"URL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URL","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":19}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageIndex") || (depth0 != null ? compilerNameLookup(depth0,"pageIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageIndex","hash":{},"data":data,"loc":{"start":{"line":44,"column":21},"end":{"line":44,"column":34}}}) : helper)))
    + "</a>\r\n		</li>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-next-disabled\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":58,"column":30}}}) : helper)))
    + "\">\r\n				<i class=\"global-views-pagination-next-icon\"></i>\r\n			</a>\r\n		</li>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-next\">\r\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"nextPageURL") || (depth0 != null ? compilerNameLookup(depth0,"nextPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"nextPageURL","hash":{},"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":27}}}) : helper)))
    + "\">\r\n				<i class=\"global-views-pagination-next-icon\"></i>\r\n			</a>\r\n		</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":71,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_pagination'; return template;});