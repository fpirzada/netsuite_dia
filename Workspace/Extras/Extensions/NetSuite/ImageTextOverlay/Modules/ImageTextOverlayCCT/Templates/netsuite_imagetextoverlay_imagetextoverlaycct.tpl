<section class="imagetextoverlaycct-container">
  <div class="content {{imgOverlayClass}}">
    <div class="crop-height bg-image-base {{imgAlignClass}} {{opacityClass}}"
        title="{{altText}}"
        style="background-image: url({{imageURL}});">
      <img class="scale transparent" src="{{imageURL}}"alt="{{altText}}"/>
    </div>
    <div class="content-box {{textAlignClass}}">
        {{#if hasText}}
      <div class="text-content {{textColorClass}}">{{{text}}}</div>
        {{/if}}
        {{#if hasBtnText}}
          <div class="button-container">
            <a href="{{btnLink}}"
                target="{{target}}"
                class="{{btnStyleClass}}"
                data-action="sc-imagetextoverlay-buttonpress">
                {{btnText}}
            </a>
          </div>
        {{/if}}
      </div>
    </div>
</section>
