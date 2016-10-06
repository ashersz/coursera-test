(function () {
  'use strict'

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'menu/items.html',
    bindings: {
      allItems: '<'
    }
  })
})()
