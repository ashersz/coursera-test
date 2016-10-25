(function () {
  'use strict'
  angular.module('common')
  .service('UserInfoService', UserInfoService)
  UserInfoService.$inject = ['$rootScope', '$window']
  function UserInfoService ($rootScope, $window) {
    var service = this
    // service.userInfo = {
    //   lastname: '',
    //   firstname: '',
    //   email: '',
    //   menu_item: ''
    // }
    service.setUserInfo = function (userInfo) {
      $window.sessionStorage.UserInfoService = angular.toJson(userInfo)
    }
    service.getUserInfo = function () {
      $window.service.UserInfoService = angular.fromJson($window.sessionStorage.UserInfoService)
    }
  //  $rootScope.$on('saveUserInfo', service.setUserInfo)
  //  $rootScope.$on('getUserInfo', service.getUserInfo)
  }
})()
