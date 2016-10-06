(function () {
  'use strict'

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'menu/items.html',
    controller: ItemsComponentController,
    bindings: {
      allItems: '<'
    }
  })
  function ItemsComponentController () {
    var $ctrl = this
  }
})()
