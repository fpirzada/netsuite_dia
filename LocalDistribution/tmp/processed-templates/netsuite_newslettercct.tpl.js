define('netsuite_newslettercct.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " newslettercct-background-image ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " style=\"background-image: url('"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"bgimg_url") || (depth0 != null ? compilerNameLookup(depth0,"bgimg_url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bgimg_url","hash":{},"data":data,"loc":{"start":{"line":1,"column":229},"end":{"line":1,"column":244}}}) : helper)))
    + "');\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"newslettercct-input-group\" data-input=\"firstName\" data-validation=\"control-group\">\n                    <div class=\"fields-group-form-control\" data-validation=\"control\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelFirstName") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":112}}})) != null ? stack1 : "")
    + "\n                        <input type=\"text\"\n                               class=\"newslettercct-input\"\n                               id=\"firstName\"\n                               name=\"firstName\"\n                               maxlength=\"32\"\n                               placeholder=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"firstName") || (depth0 != null ? compilerNameLookup(depth0,"firstName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"firstName","hash":{},"data":data,"loc":{"start":{"line":17,"column":44},"end":{"line":17,"column":57}}}) : helper)))
    + "\">\n                    </div>\n                </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelFirstName") || (depth0 != null ? compilerNameLookup(depth0,"labelFirstName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelFirstName","hash":{},"data":data,"loc":{"start":{"line":11,"column":79},"end":{"line":11,"column":97}}}) : helper)))
    + "</label>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"newslettercct-input-group\" data-input=\"lastName\" data-validation=\"control-group\">\n                    <div class=\"fields-group-form-control\" data-validation=\"control\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelLastName") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":22},"end":{"line":25,"column":110}}})) != null ? stack1 : "")
    + "\n                        <input type=\"text\"\n                               class=\"newslettercct-input\"\n                               id=\"lastName\"\n                               name=\"lastName\"\n                               maxlength=\"32\"\n                               placeholder=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lastName") || (depth0 != null ? compilerNameLookup(depth0,"lastName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"lastName","hash":{},"data":data,"loc":{"start":{"line":31,"column":44},"end":{"line":31,"column":56}}}) : helper)))
    + "\">\n                    </div>\n                </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelLastName") || (depth0 != null ? compilerNameLookup(depth0,"labelLastName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelLastName","hash":{},"data":data,"loc":{"start":{"line":25,"column":78},"end":{"line":25,"column":95}}}) : helper)))
    + "</label>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"newslettercct-input-group\" data-input=\"company\" data-validation=\"control-group\">\n                    <div class=\"fields-group-form-control\" data-validation=\"control\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelCompany") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":22},"end":{"line":39,"column":108}}})) != null ? stack1 : "")
    + "\n                        <input type=\"text\"\n                               class=\"newslettercct-input\"\n                               id=\"company\"\n                               name=\"company\"\n                               maxlength=\"32\"\n                               placeholder=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"company","hash":{},"data":data,"loc":{"start":{"line":45,"column":44},"end":{"line":45,"column":55}}}) : helper)))
    + "\">\n                    </div>\n                </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelCompany") || (depth0 != null ? compilerNameLookup(depth0,"labelCompany") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelCompany","hash":{},"data":data,"loc":{"start":{"line":39,"column":77},"end":{"line":39,"column":93}}}) : helper)))
    + "</label>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"newslettercct-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"labelEmail") || (depth0 != null ? compilerNameLookup(depth0,"labelEmail") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelEmail","hash":{},"data":data,"loc":{"start":{"line":52,"column":71},"end":{"line":52,"column":85}}}) : helper)))
    + "</label>";
},"16":function(container,depth0,helpers,partials,data) {
    return "                    <div data-view=\"GlobalMessageFeedback\"></div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div>\n                    <a class=\"newsletter-link\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"termsLink") || (depth0 != null ? compilerNameLookup(depth0,"termsLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"termsLink","hash":{},"data":data,"loc":{"start":{"line":77,"column":53},"end":{"line":77,"column":66}}}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"termsLabel") || (depth0 != null ? compilerNameLookup(depth0,"termsLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"termsLabel","hash":{},"data":data,"loc":{"start":{"line":77,"column":84},"end":{"line":77,"column":98}}}) : helper)))
    + "</a>\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"newslettercct-layout newslettercct-align-center newslettercct-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":1,"column":78},"end":{"line":1,"column":88}}}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"bgimg_url") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":89},"end":{"line":1,"column":145}}})) != null ? stack1 : "")
    + " newslettercct-background clearfix\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"bgimg_url") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":181},"end":{"line":1,"column":256}}})) != null ? stack1 : "")
    + ">\n  <div class=\"newslettercct-overlay\">\n    <form class=\"newslettercct-form\" data-action=\"newsletter-signup\" novalidate>\n        <div class=\"newslettercct-container\" data-validation=\"control-group\">\n            <h3 class=\"newslettercct-header\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":55}}}) : helper)))
    + "</h3>\n            <div class=\"newslettercct-subheader\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"subHeader") || (depth0 != null ? compilerNameLookup(depth0,"subHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subHeader","hash":{},"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFirstName") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLastName") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":34,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompany") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "\n            <div class=\"newslettercct-input-group\" data-input=\"email\" data-validation=\"control-group\">\n                <div class=\"fields-group-form-control\" data-validation=\"control\">\n                  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"labelEmail") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":18},"end":{"line":52,"column":100}}})) != null ? stack1 : "")
    + "\n                    <input type=\"text\"\n                           class=\"newslettercct-input\"\n                           id=\"email\"\n                           name=\"email\"\n                           maxlength=\"254\"\n                           placeholder=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"email") || (depth0 != null ? compilerNameLookup(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":58,"column":40},"end":{"line":58,"column":49}}}) : helper)))
    + "\">\n                </div>\n            </div>\n\n            <span class=\"newslettercct-button-container\">\n                    <button type=\"submit\"\n                            data-action=\"submit\"\n                            class=\"newslettercct-submit\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"buttonText") || (depth0 != null ? compilerNameLookup(depth0,"buttonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":65,"column":57},"end":{"line":65,"column":71}}}) : helper)))
    + "\n                    </button>\n            </span>\n\n            <div class=\"newsletter-alert-placeholder\" data-type=\"alert-placeholder\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":16},"end":{"line":72,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":12},"end":{"line":79,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </form>\n  </div>\n</section>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/NewsletterSignUp/1.1.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netsuite_newslettercct'; return template;});