(function () {
  'use strict'
  angular.module('MenuData')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
  // MenuSearchService
  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService ($http, ApiBasePath) {
    var service = this
    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      }).then(function (result) {
        return result
      })
    }
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName),
        params: {shortName: categoryShortName}
      }).then(function (result) {
        return result
      })
    }
  }
})()
