(function () {
  'use strict'

  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController)

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController (MenuSearchService) {
    var ctrl = this
    ctrl.narrowSearch = function () {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
      promise.then(function (response) {
        ctrl.found = response
      })
      .catch(function (error) {
        console.log('error,' + error.message)
      })
    }
    ctrl.removeFound = function (index) {
      ctrl.found.splice(index, 1)
    }
  }
})()
