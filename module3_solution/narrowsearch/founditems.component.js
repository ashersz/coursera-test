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
    $ctrl.myMessage = 'Nothing found'
    $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({ index: myIndex })
    }
  }
})()
