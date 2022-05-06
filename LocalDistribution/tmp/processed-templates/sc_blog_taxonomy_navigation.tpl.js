define('sc_blog_taxonomy_navigation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"activeTaxonomy") || (depth0 != null ? compilerNameLookup(depth0,"activeTaxonomy") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"activeTaxonomy","hash":{},"data":data,"loc":{"start":{"line":7,"column":28},"end":{"line":7,"column":46}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sectionTitle") || (depth0 != null ? compilerNameLookup(depth0,"sectionTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sectionTitle","hash":{},"data":data,"loc":{"start":{"line":7,"column":54},"end":{"line":7,"column":70}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"sc-blog-post-taxonomy-navigation\" role=\"navigation\" aria-labelledby=\"section-title\" tabindex=\"0\">\n  <h5 class=\"sc-blog-post-taxonomy-navigation-list-title\" data-action=\"expand-taxonomy-list\">\n    <span class=\"sc-blog-post-taxonomy-navigation-list-title-large-devices\" id=\"section-title\">\n      "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"sectionTitle") || (depth0 != null ? compilerNameLookup(depth0,"sectionTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sectionTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":22}}}) : helper)))
    + "\n    </span>\n    <span class=\"sc-blog-post-taxonomy-navigation-list-title-small-devices\">\n      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"activeTaxonomy") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":77}}})) != null ? stack1 : "")
    + "\n    </span>\n    <span class=\"sc-blog-post-taxonomy-navigation-list-title-icon\"></span>\n  </h5>\n  <div class=\"sc-blog-post-taxonomy-navigation-container\">\n    <ul data-view=\"Taxonomies.View\"></ul>\n  </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_taxonomy_navigation'; return template;});