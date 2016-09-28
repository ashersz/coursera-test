(function () {
  'use strict'

  angular.module('Loader')
  .component('itemsLoaderIndicator', {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    controller: LoaderController
  })
  LoaderController.$inject = ['$rootScope', '$element']
  function LoaderController ($rootScope, $element) {
    var $ctrl = this

    var cancelListener = $rootScope.$on('foundItems:processing', function (event, data) {
      console.log('Event: ', event)
      console.log('Data: ', data)

      if (data.on) {
        $element.find('div').css('display', 'block')
      } else {
        $element.find('div').css('display', 'none')
      }
    })

    $ctrl.$onDestroy = function () {
      cancelListener()
    }
  }
})()
