(function () {
  'use strict'
  angular.module('MenuData')
  .controller('MenuDataDetailController', MenuDataDetailController)
  MenuDataDetailController.$inject = ['items']
  function MenuDataDetailController (items) {
    var catDetail = this
    catDetail.menuItems = items.data.menu_items
    catDetail.categoryName = items.data.category.name
  }
})()
