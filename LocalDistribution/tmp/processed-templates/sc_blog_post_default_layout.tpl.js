define('sc_blog_post_default_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main>\n<div class=\"sc-blog-post-default-layout\">\n  <div class=\"sc-blog-post-default-layout-container\">\n    <div class=\"sc-blog-post-default-layout-csm-area-full-width-column\"\n         data-cms-area=\"all-blog-post-pages-cms-area-1\" data-cms-area-filters=\"page_type\">\n    </div>\n    <div class=\"sc-blog-post-default-layout-csm-area-full-width-column\"\n         data-cms-area=\"blog-post-cms-area-1\" data-cms-area-filters=\"path\">\n    </div>\n    <div class=\"sc-blog-post-default-layout-csm-area-row\">\n      <div class=\"sc-blog-post-default-layout-csm-area-column\" data-cms-area=\"blog-post-cms-area-2\"\n           data-cms-area-filters=\"path\">\n      </div>\n      <div class=\"sc-blog-post-default-layout-csm-area-column\" data-cms-area=\"blog-post-cms-area-3\"\n           data-cms-area-filters=\"path\">\n      </div>\n    </div>\n    <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n  </div>\n\n  <div class=\"sc-blog-post-default-layout-container\" data-component=\"header\">\n    <div class=\"sc-blog-post-default-layout-content-box-full-width\">\n      <div class=\"sc-blog-post-default-layout-content-box-partial-medium\" data-view=\"Header.View\"></div>\n      <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n    </div>\n    <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n  </div>\n\n  <div class=\"sc-blog-post-default-layout-row\" data-component=\"header-image\" data-view=\"Header.Image.View\"></div>\n\n  <div class=\"sc-blog-post-default-layout-container\">\n    <div class=\"sc-blog-post-default-layout-csm-area-full-width-column\"\n         data-cms-area=\"all-blog-post-pages-cms-area-2\" data-cms-area-filters=\"page_type\">\n    </div>\n    <div class=\"sc-blog-post-default-layout-csm-area-row\">\n      <div class=\"sc-blog-post-default-layout-csm-area-column\" data-cms-area=\"blog-post-cms-area-4\"\n           data-cms-area-filters=\"path\">\n      </div>\n      <div class=\"sc-blog-post-default-layout-csm-area-column\" data-cms-area=\"blog-post-cms-area-5\"\n           data-cms-area-filters=\"path\">\n      </div>\n      <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n    </div>\n    <div class=\"sc-blog-post-default-layout-csm-area-full-width-column\"\n         data-cms-area=\"blog-post-cms-area-6\" data-cms-area-filters=\"path\">\n    </div>\n    <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n  </div>\n\n  <div class=\"sc-blog-post-default-layout-container\" data-component=\"content\">\n    <div class=\"sc-blog-post-default-layout-content-box-full-width\">\n      <div class=\"sc-blog-post-default-layout-content-box-partial-medium\" data-view=\"Content.View\"></div>\n      <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n    </div>\n    <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n  </div>\n\n  <div class=\"sc-blog-post-default-layout-container\">\n    <div class=\"sc-blog-post-default-layout-csm-area-full-width-column\"\n         data-cms-area=\"blog-post-cms-area-7\" data-cms-area-filters=\"path\">\n    </div>\n    <div class=\"sc-blog-post-default-layout-csm-area-full-width-column\"\n         data-cms-area=\"all-blog-post-pages-cms-area-3\" data-cms-area-filters=\"page_type\">\n    </div>\n    <div class=\"sc-blog-post-default-layout-column-container\">\n      <div class=\"sc-blog-post-default-layout-csm-area-column\"\n           data-cms-area=\"all-blog-post-pages-cms-area-4\" data-cms-area-filters=\"page_type\">\n      </div>\n      <div class=\"sc-blog-post-default-layout-csm-area-column\"\n           data-cms-area=\"all-blog-post-pages-cms-area-5\" data-cms-area-filters=\"page_type\">\n      </div>\n      <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n    </div>\n    <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n  </div>\n\n  <div class=\"sc-blog-post-default-layout-container\" data-component=\"footer\">\n    <div class=\"sc-blog-post-default-layout-content-box-full-width\">\n      <div class=\"sc-blog-post-default-layout-content-box-partial-medium\" data-view=\"Footer.View\"></div>\n      <div class=\"sc-blog-post-default-layout-clear-box\"></div>\n    </div>\n  </div>\n</div>\n</main>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post_default_layout'; return template;});