(function () {
  'use strict'

  angular.module('NarrowItDownApp')
  .factory('MenuSearchFactory', MenuSearchFactory)

  function MenuSearchFactory () {
    var factory = function (searchTerm) {
      return new MenuSearchService(searchTerm)
    }
    return factory
  }

// MenuSearchService
  function MenuSearchService (searchTerm) {
    var service = this

    service.getMatchedMenuItems = function (searchTerm) {
    }
  }
})()
