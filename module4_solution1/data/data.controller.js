(function () {
  'use strict'
  angular.module('MenuData')
  .controller('MenuDataController', MenuDataController)

  // MainShoppingListController.$inject = ['ShoppingListService'];
  // function MainShoppingListController(ShoppingListService) {
  MenuDataController.$inject = ['items']
  function MenuDataController (items) {
    var ctrl = this
    ctrl.items = items.data
  }
})()
