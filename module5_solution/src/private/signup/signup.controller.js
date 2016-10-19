(function () {
  'use strict'

  angular.module('private')
  .controller('SignupController', SignupController)

  // SignupController.$inject = ['menuItems']
  function SignupController () {
    var reg = this

    reg.submit = function () {
      reg.completed = true
    }
  }
})()
