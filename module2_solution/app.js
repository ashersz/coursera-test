(function () {
  'use strict'
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']
  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var tobuy = this
    tobuy.tobuy = ShoppingListCheckOffService.tobuy
    tobuy.removeItem = function (index) {
      ShoppingListCheckOffService.removeBoughtItem(index)
    }
    tobuy.message = 'Everything is bought!'
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this
    bought.bought = ShoppingListCheckOffService.getBought()
    bought.message = 'Nothing bought yet.'
  }
  function ShoppingListCheckOffService () {
    var shoppingList = this

    shoppingList.tobuy = [
      { name: 'cookies', quantity: 10 },
      { name: 'fruits', quantity: 5 },
      { name: 'vegetables', quantity: 3 },
      { name: 'meat', quantity: 1 },
      { name: 'milk', quantity: 7 }
    ]
    var bought = []
    shoppingList.removeBoughtItem = function (index) {
      var item = shoppingList.tobuy[index]
      shoppingList.tobuy.splice(index, 1)
      shoppingList.addBoughtItem(item)
    }
    shoppingList.addBoughtItem = function (item) {
      bought.push(item)
    }
    shoppingList.getBought = function () {
      return bought
    }
  }
})()
