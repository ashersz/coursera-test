(function () {
  'use strict'

  angular.module('private')
.component('userInfo', {
  templateUrl: 'src/private/myinfo/userinfo.html',
  bindings: {
    userinfo: '<'
  }
})
})()
