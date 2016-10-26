(function () {
  'use strict'
  angular.module('private')
  .config(routeConfig)
  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider']
  function routeConfig ($stateProvider) {
    $stateProvider
      .state('private', {
        abstract: true,
        templateUrl: 'src/private/private.html'
      })
      .state('private.signup', {
        url: '/signup',
        templateUrl: 'src/private/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'reg'
      })
      .state('private.myinfo', {
        url: '/myinfo',
        templateUrl: 'src/private/myinfo/myinfo.html',
        controller: 'MyInfoController',
        controllerAs: 'myinfo',
        resolve: {
          userinfo: ['UserInfoService', function (UserInfoService) {
            return UserInfoService.getUserInfo()
          }]
        }
      })
  }
})()
