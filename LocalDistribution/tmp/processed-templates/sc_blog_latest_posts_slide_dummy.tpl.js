define('sc_blog_latest_posts_slide_dummy.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sc-blog-latest-posts-slide\">\n  <div class=\"sc-blog-latest-posts-slide-wrapper dummy\">\n    <div class=\"sc-blog-latest-posts-slide-wrapper-dummy-thumbnail\"></div>\n    <div class=\"sc-blog-latest-posts-slide-wrapper-content non-thumbnail\">\n      <div class=\"sc-blog-latest-posts-slide-wrapper-content-category\">\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-category-mock\"></div>\n      </div>\n      <div class=\"sc-blog-latest-posts-slide-wrapper-content-body\">\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-title\">\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-title-mock\"></div>\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-title-mock\"></div>\n        </div>\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-excerpt\">\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-excerpt-mock\"></div>\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-excerpt-mock\"></div>\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-excerpt-mock\"></div>\n        </div>\n      </div>\n      <div class=\"sc-blog-latest-posts-slide-wrapper-content-read-more-action\">\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-read-more-action-mock\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.3/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_latest_posts_slide_dummy'; return template;});