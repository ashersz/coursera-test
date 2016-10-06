(function () {
  'use strict'

  angular.module('MenuApp')
  .component('itemsMenu', {
    templateUrl: 'templates/items-list.html',
    bindings: {
      items: '<'
    }
  })
})()
