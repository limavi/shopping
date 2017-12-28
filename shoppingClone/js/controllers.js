angular.module('app.controllers', [])
  
.controller('centrosComercialesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.malls = [
    {name:'CC. Andino', direccion:'calle 1'},
    {name:'CC. Atlantis', direccion:'calle 1'},
    {name:'CC. Cedritos', direccion:'calle 151'}
  ];

}])
   
.controller('mapaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('promocionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('iniciarSesiNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('tiendasCCAndinoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.shops = [
    {name:'Studio F', local:'Piso 1 Local 120'},
    {name:'Arturo Calle', local:'Piso 1 Local 103'},
    {name:'Tennis', local:'Piso 3 Local 353'},
    {name:'Tania', local:'Piso 2  Local 219'},
    {name:'Lego', local:'Piso 3  Local 322'},
    {name:'Totto', local:'Piso 2  Local 213'},
    {name:'Tommy Hilfiger', local:'Piso 3  Local 334'},
    {name:'Subway', local:'Piso 4  Local 420'},
    {name:'Cinecolombia', local:'Piso 3  Local 311'},
    {name:'Chevignon', local:'Piso 1  Local 102'},
    {name:'Oma', local:'Piso 3  Local 437'},
    {name:'Spoleto', local:'Piso 4  Local 416'},
    {name:'Nyke', local:'Piso 1  Local 117'},
    {name:'Bosi', local:'Piso 1  Local 104'},
    {name:'Bella Piel', local:'Piso 2  Local 256'},
    {name:'BBVA', local:'Piso 1  Local 109'},
    {name:'Banco de Bogotá', local:'Piso 3  Local 356'},
  ];

}])
 