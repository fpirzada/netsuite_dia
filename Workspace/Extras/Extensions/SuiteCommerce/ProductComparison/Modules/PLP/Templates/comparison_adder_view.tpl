<div class="facets-item-cell-addtocompare{{#if item.isSelectedToCompare}} added-to-compare{{/if}}">
  <input type="checkbox" id="product-id-{{item.internalId}}"
    class="facets-item-cell-addtocompare-ckbox" style="width:11px" 
      data-action="add-to-compare" {{#if item.isSelectedToCompare}} checked {{/if}}
      {{#if isNotAllowedChangeCompareOptions}} disabled="true"{{/if}}>
  <label for="product-id-{{item.internalId}}" style="font-size:12px"
    {{#if isNotAllowedChangeCompareOptions}}
      data-toggle="tooltip" title="{{excessInItemsAllowedMessage}}"
    {{/if}}>
    {{translate addToCompareLabel}}</label>
</div>
