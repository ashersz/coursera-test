(function () {
  'use strict'

  angular.module('private')
  .controller('SignupController', SignupController)

  SignupController.$inject = ['MenuService']
  function SignupController (MenuService) {
    var reg = this

    reg.submit = function () {
      reg.completed = true
      MenuService.getMenuItem(reg.user.menu_item)
    }
  }
})()
