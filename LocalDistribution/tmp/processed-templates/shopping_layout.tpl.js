define('shopping_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n\r\n<div id=\"layout\" class=\"shopping-layout\">\r\n	<header id=\"site-header\" class=\"shopping-layout-header\" data-view=\"Header\"></header>\r\n	<div id=\"main-container\" class=\"theme-has-static-header\" style=\"background-color:white\">\r\n		<div id=\"header_Breadcrumb\" class=\"shopping-layout-breadcrumb\" >\r\n				<div data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div>\r\n			</div> \r\n		<div class=\"shopping-layout-notifications\">\r\n			<div data-view=\"Notifications\"></div>\r\n		</div>\r\n		<!-- Main Content Area -->\r\n		<div id=\"content\" class=\"shopping-layout-content\"></div>\r\n		<!-- / Main Content Area -->\r\n	</div>\r\n	<footer id=\"site-footer\" class=\"shopping-layout-footer\" data-view=\"Footer\"></footer>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'shopping_layout'; return template;});