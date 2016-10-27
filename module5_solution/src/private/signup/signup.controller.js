(function () {
  'use strict'

  angular.module('private')
  .controller('SignupController', SignupController)

  SignupController.$inject = ['MenuService', 'UserInfoService']
  function SignupController (MenuService, UserInfoService) {
    var reg = this
    reg.checkmemu_item = function () {
      reg.message = ''
      reg.completed = false
      reg.info = ''
      MenuService.getMenuItem(reg.user.menu_item_name).then(function (response) {
        if (typeof response === 'object') {
          reg.user.menu_item = response
        } else {
          reg.message = response
        }
        if (reg.completed) {
          UserInfoService.setUserInfo(reg.user)
        }
      })
    }
    reg.submit = function () {
      reg.completed = true
      UserInfoService.setUserInfo(reg.user)
      reg.info = 'Your information has been saved'
    }
  }
})()
