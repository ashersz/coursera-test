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
        absract: true,
        templateUrl: 'src/private/private.html'
      })
      .state('private.signup', {
        url: '/signup',
        templateUrl: 'src/private/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'reg'
      })
  }
})()
