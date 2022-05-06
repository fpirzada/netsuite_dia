define('netsuite_imagetextoverlay_imagetextoverlaycct.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "      <div class=\"text-content "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textColorClass") || (depth0 != null ? compilerNameLookup(depth0,"textColorClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textColorClass","hash":{},"data":data,"loc":{"start":{"line":10,"column":31},"end":{"line":10,"column":49}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":51},"end":{"line":10,"column":61}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"button-container\">\n            <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnLink") || (depth0 != null ? compilerNameLookup(depth0,"btnLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnLink","hash":{},"data":data,"loc":{"start":{"line":14,"column":21},"end":{"line":14,"column":32}}}) : helper)))
    + "\"\n                target=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"target") || (depth0 != null ? compilerNameLookup(depth0,"target") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data,"loc":{"start":{"line":15,"column":24},"end":{"line":15,"column":34}}}) : helper)))
    + "\"\n                class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnStyleClass") || (depth0 != null ? compilerNameLookup(depth0,"btnStyleClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnStyleClass","hash":{},"data":data,"loc":{"start":{"line":16,"column":23},"end":{"line":16,"column":40}}}) : helper)))
    + "\"\n                data-action=\"sc-imagetextoverlay-buttonpress\">\n                "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnText") || (depth0 != null ? compilerNameLookup(depth0,"btnText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnText","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "\n            </a>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"imagetextoverlaycct-container\">\n  <div class=\"content "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imgOverlayClass") || (depth0 != null ? compilerNameLookup(depth0,"imgOverlayClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgOverlayClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":2,"column":41}}}) : helper)))
    + "\">\n    <div class=\"crop-height bg-image-base "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imgAlignClass") || (depth0 != null ? compilerNameLookup(depth0,"imgAlignClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgAlignClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":42},"end":{"line":3,"column":59}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"opacityClass") || (depth0 != null ? compilerNameLookup(depth0,"opacityClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opacityClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":60},"end":{"line":3,"column":76}}}) : helper)))
    + "\"\n        title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":26}}}) : helper)))
    + "\"\n        style=\"background-image: url("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":49}}}) : helper)))
    + ");\">\n      <img class=\"scale transparent\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":42},"end":{"line":6,"column":54}}}) : helper)))
    + "\"alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":6,"column":60},"end":{"line":6,"column":71}}}) : helper)))
    + "\"/>\n    </div>\n    <div class=\"content-box "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textAlignClass") || (depth0 != null ? compilerNameLookup(depth0,"textAlignClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textAlignClass","hash":{},"data":data,"loc":{"start":{"line":8,"column":28},"end":{"line":8,"column":46}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBtnText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":21,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/ImageTextOverlay/1.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netsuite_imagetextoverlay_imagetextoverlaycct'; return template;});