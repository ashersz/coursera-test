(function () {
  'use strict'

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController)
  LunchCheckController.$inject = ['$scope']
  function LunchCheckController ($scope) {
    $scope.lunch_menu = ''
    $scope.message = ''
    $scope.check_menu = function () {
      var arr = $scope.lunch_menu.split(',')
      if (arr.length > 3) {
        $scope.color = 'green'
        $scope.message = 'Too much!'
      } else {
        if ($scope.lunch_menu.length > 0) {
          $scope.color = 'green'
          $scope.message = 'Enjoy!'
        } else {
          $scope.color = 'red'
          $scope.message = 'Please enter data first'
        }
      }
    }
  }
})()
