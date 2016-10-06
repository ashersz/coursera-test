(function () {
  'use strict'

  angular.module('MenuApp')
  .component('categoriesMenu', {
    templateUrl: 'templates/categories.list.html',
    bindings: {
      categories: '<'
    }
  })
})()
