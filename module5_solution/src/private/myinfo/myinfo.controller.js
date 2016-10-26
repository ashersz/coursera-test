(function () {
  'use strict'

  angular.module('private')
  .controller('MyInfoController', MyInfoController)

  MyInfoController.$inject = ['userinfo', 'ApiPath']
  function MyInfoController (userinfo, ApiPath) {
    var myinfo = this
    myinfo.completed = false
    myinfo.uncomplete = 'Sign up Now!'
    if (userinfo && userinfo.firstname) {
      myinfo.completed = true
      myinfo.userinfo = userinfo
      if (userinfo.menu_item && userinfo.menu_item.image_present) {
        myinfo.userinfo.menu_item.image_path = ApiPath + '/images/' + userinfo.menu_item_name + '.jpg'
      }
    }
  }
})()
