(function () {
  'use strict'

  angular.module('NarrowItDownApp')
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')

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
        var length, i, item
    // process result and only keep items that match
        if (result.data && result.data.menu_items) {
          length = result.data.menu_items.length
          for (i = 0; i < length; i++) {
            item = result.data.menu_items[i]
            if(searchTerm && searchTerm.length > 0 && item.description && item.description.indexOf(searchTerm) > -1) {
              foundItems.push(item)
            }
          }
        }
    // return processed items
        return foundItems
      })
    }
  }
})()
