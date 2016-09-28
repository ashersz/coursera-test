(function () {
  'use strict'

  angular.module('NarrowItDownApp')
  .component('foundItems', {
    templateUrl: 'narrowsearch/founditems.html',
    controller: FoundItemsComponentController,
    bindings: {
      foundItems: '<',
      onRemove: '&'
    }
  })
  function FoundItemsComponentController () {
    var $ctrl = this
    $ctrl.$onInit = function () {
      console.log('init component')
    }
    $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({ index: myIndex })
    }
  }
})()
