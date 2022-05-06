<section class="photogallerycct-layout">
  <div class="photogallerycct-container">
    {{#each galleryRows}}
      <div class="row gallery-slider {{../galleryStyle}}">
        {{#each photos}}
          <div class="col-sm-{{../columnSize}} col-md-{{../columnSize}} column-container">
            <div class="photo-id-{{ id }} {{ ../../imageHoverAnimationType }} photo-container">
              <div class="{{../../galleryHeight}}">
                <div class="overlay {{ imageOverlay }}"></div>

                <div
                  class="image {{ imageAlignment }}"
                  title="{{ imageAltText }}"
                  style="background-image: url({{ imageURL }});">
                  <span role="img" aria-label="{{ imageAltText }}"></span>
                </div>

                <div class="caption {{ textColor }} {{ textAlignment }}">
                  <h2>{{ heading }}</h2>
                  <p>{{ description }}</p>
                </div>
              </div>
            </div>
          </div>
        {{/each}}
      </div>
    {{/each}}
  </div>
</section>
