(function () {
  'use strict'
  angular.module('MenuData')
  .controller('MenuDataController', MenuDataController)
  MenuDataController.$inject = ['items']
  function MenuDataController (items) {
    var ctrl = this
    ctrl.items = items.data
  }
})()
