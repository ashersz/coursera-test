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
        $scope.message = 'Too much!'
      } else {
        if ($scope.message.length > 0) {
          $scope.message = 'Enjoy!'
        } else {
          $scope.message = 'Please enter data first'
        }
      }
    }
  }
})()
