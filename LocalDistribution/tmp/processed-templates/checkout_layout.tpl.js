define('checkout_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div id=\"layout\" class=\"checkout-layout\">\r\n	<header id=\"site-header\" class=\"checkout-layout-header\" data-view=\"Header\"></header>\r\n	<div id=\"main-container\">\r\n		<div class=\"checkout-layout-breadcrumb\" data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div>\r\n		<div class=\"checkout-layout-notifications\">\n			<div data-view=\"Notifications\"></div>\n		</div>\n		<!-- Main Content Area -->\r\n		<div id=\"content\" class=\"checkout-layout-content\"></div>\r\n		<!-- / Main Content Area -->\r\n	</div>\r\n	<footer id=\"site-footer\" class=\"checkout-layout-footer\" data-view=\"Footer\"></footer>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'checkout_layout'; return template;});