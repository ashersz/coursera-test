(function () {
  'use strict'
  angular.module('common')
  .service('UserInfoService', UserInfoService)
  UserInfoService.$inject = ['$window']
  function UserInfoService ($window) {
    var service = this
    service.setUserInfo = function (userInfo) {
      $window.sessionStorage.UserInfoService = angular.toJson(userInfo)
    }
    service.getUserInfo = function () {
      return angular.fromJson($window.sessionStorage.UserInfoService)
    }
  }
})()
