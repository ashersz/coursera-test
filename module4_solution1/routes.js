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
        templateUrl: 'templates/home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.html',
        controller: 'MenuDataController as ctrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories()
          }]
        }
      })
  }
})()
