(function () {
  'use strict'
  angular.module('MenuData')
  .controller('MenuDataDetailController', MenuDataDetailController)
  MenuDataDetailController.$inject = ['itemsDetail']
  function MenuDataDetailController (itemsDetail) {
    var ctrlDetail = this
    ctrlDetail.itemsDetail = itemsDetail.data.menu_items
    ctrlDetail.categoryName = itemsDetail.data.category.name
  }
})()
