(function () {
  'use strict'
  angular.module('MenuData')
  .controller('MenuDataDetailController', MenuDataDetailController)
  MenuDataDetailController.$inject = ['items']
  function MenuDataDetailController (items) {
    var ctrlDetail = this
    ctrlDetail.menuItems = items.data.menu_items
    ctrlDetail.categoryName = items.data.category.name
  }
})()
