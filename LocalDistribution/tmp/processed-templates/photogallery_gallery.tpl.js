define('photogallery_gallery.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "      <div class=\"row gallery-slider "
    + container.escapeExpression(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"galleryStyle") : depths[1]), depth0))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"photos") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "      </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "          <div class=\"col-sm-"
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"columnSize") : depths[1]), depth0))
    + " col-md-"
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"columnSize") : depths[1]), depth0))
    + " column-container\">\n            <div class=\"photo-id-"
    + alias2(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":41}}}) : helper)))
    + " "
    + alias2(alias1((depths[2] != null ? compilerNameLookup(depths[2],"imageHoverAnimationType") : depths[2]), depth0))
    + " photo-container\">\n              <div class=\""
    + alias2(alias1((depths[2] != null ? compilerNameLookup(depths[2],"galleryHeight") : depths[2]), depth0))
    + "\">\n                <div class=\"overlay "
    + alias2(((helper = (helper = compilerNameLookup(helpers,"imageOverlay") || (depth0 != null ? compilerNameLookup(depth0,"imageOverlay") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"imageOverlay","hash":{},"data":data,"loc":{"start":{"line":9,"column":36},"end":{"line":9,"column":54}}}) : helper)))
    + "\"></div>\n\n                <div\n                  class=\"image "
    + alias2(((helper = (helper = compilerNameLookup(helpers,"imageAlignment") || (depth0 != null ? compilerNameLookup(depth0,"imageAlignment") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"imageAlignment","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":51}}}) : helper)))
    + "\"\n                  title=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"imageAltText") || (depth0 != null ? compilerNameLookup(depth0,"imageAltText") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"imageAltText","hash":{},"data":data,"loc":{"start":{"line":13,"column":25},"end":{"line":13,"column":43}}}) : helper)))
    + "\"\n                  style=\"background-image: url("
    + alias2(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":14,"column":47},"end":{"line":14,"column":61}}}) : helper)))
    + ");\">\n                  <span role=\"img\" aria-label=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"imageAltText") || (depth0 != null ? compilerNameLookup(depth0,"imageAltText") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"imageAltText","hash":{},"data":data,"loc":{"start":{"line":15,"column":47},"end":{"line":15,"column":65}}}) : helper)))
    + "\"></span>\n                </div>\n\n                <div class=\"caption "
    + alias2(((helper = (helper = compilerNameLookup(helpers,"textColor") || (depth0 != null ? compilerNameLookup(depth0,"textColor") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"textColor","hash":{},"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":51}}}) : helper)))
    + " "
    + alias2(((helper = (helper = compilerNameLookup(helpers,"textAlignment") || (depth0 != null ? compilerNameLookup(depth0,"textAlignment") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"textAlignment","hash":{},"data":data,"loc":{"start":{"line":18,"column":52},"end":{"line":18,"column":71}}}) : helper)))
    + "\">\n                  <h2>"
    + alias2(((helper = (helper = compilerNameLookup(helpers,"heading") || (depth0 != null ? compilerNameLookup(depth0,"heading") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"heading","hash":{},"data":data,"loc":{"start":{"line":19,"column":22},"end":{"line":19,"column":35}}}) : helper)))
    + "</h2>\n                  <p>"
    + alias2(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":20,"column":21},"end":{"line":20,"column":38}}}) : helper)))
    + "</p>\n                </div>\n              </div>\n            </div>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<section class=\"photogallerycct-layout\">\n  <div class=\"photogallerycct-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"galleryRows") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n</section>\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/PhotoGallery/1.1.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'photogallery_gallery'; return template;});