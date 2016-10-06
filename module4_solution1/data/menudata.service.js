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
        console.log('result.data.length=' + result.data.length)
      })
    }
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName)
      }).then(function (result) {

      })
    }
  }
})()
