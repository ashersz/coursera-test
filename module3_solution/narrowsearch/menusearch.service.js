(function () {
  'use strict'

  angular.module('NarrowItDownApp')
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com')

// MenuSearchService
  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService ($http, ApiBasePath) {
    var service = this

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json')
      }).then(function (result) {
        var foundItems = []
        var length, i, description
    // process result and only keep items that match
        if (result.data && result.data.menu_items) {
          length = result.data.menu_items.length
          for (i = 0; i < length; i++) {
            description = result.data.menu_items[i].description
            if (description && description.indexOf(searchTerm) > -1) {
              foundItems.push(description)
            }
          }
        }
    // return processed items
        return foundItems
      })
    }
  }
})()
