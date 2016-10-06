(function () {
  angular.module('MenuApp')
  .config(RoutesConfig)
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig ($stateProvider, $urlRouterProvider) {
  // Redirect to home if no other URL matches
    $urlRouterProvider.otherwise('/')

  // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'menu/home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'menu/categories.html'
      })
      .state('items', {
        url: '/items',
        templateUrl: 'menu/items.html'
      })
  }
})()
