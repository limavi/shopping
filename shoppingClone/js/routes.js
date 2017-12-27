angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.centrosComerciales', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/centrosComerciales.html',
        controller: 'centrosComercialesCtrl'
      }
    }
  })

  .state('tabsController.mapa', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

  .state('tabsController.promociones', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/promociones.html',
        controller: 'promocionesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('iniciarSesiN', {
    url: '/page6',
    templateUrl: 'templates/iniciarSesiN.html',
    controller: 'iniciarSesiNCtrl'
  })

  .state('tabsController.tiendasCCAndino', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/tiendasCCAndino.html',
        controller: 'tiendasCCAndinoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});