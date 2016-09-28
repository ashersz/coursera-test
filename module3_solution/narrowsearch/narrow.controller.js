(function () {
  'use strict'

  angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController)

  NarrowItDownController.$inject = ['MenuSearchService', '$rootScope']
  function NarrowItDownController (MenuSearchService, $rootScope) {
    var ctrl = this
    ctrl.narrowSearch = function () {
      ctrl.found = []
      $rootScope.$broadcast('foundItems:processing', { on: true })
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
      promise.then(function (response) {
        ctrl.found = response
      })
      .catch(function (error) {
        console.log('error,' + error.message)
      })
      .finally(function () {
        $rootScope.$broadcast('foundItems:processing', { on: false })
      })
    }
    ctrl.removeFound = function (index) {
      ctrl.found.splice(index, 1)
    }
  }
})()
