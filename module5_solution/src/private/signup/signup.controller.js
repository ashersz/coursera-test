(function () {
  'use strict'

  angular.module('private')
  .controller('SignupController', SignupController)

  SignupController.$inject = ['MenuService', 'UserInfoService']
  function SignupController (MenuService, UserInfoService) {
    var reg = this
    reg.checkmemu_item = function () {
      reg.message = ''
      MenuService.getMenuItem(reg.user.menu_item_name).then(function (response) {
        reg.user.menu_item = response
      }, function (error) {
        console.log('error= ' + error.statusText)
        reg.message = 'No such menu number exists'
      })
    }
    reg.submit = function () {
      reg.completed = true
      reg.info = 'Your information has been saved'
      UserInfoService.setUserInfo(reg.user)
    }
  }
})()
