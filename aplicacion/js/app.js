(function(){
    var app = angular.module('familia', [
        'ngRoute', 
        'familia.controllers', 
        'familia.directives']);  
   
    app.config(['$routeProvider', function ($routeProvider) {
       $routeProvider
       .when('/', {
        templateUrl: 'vistas/familiares.html',
        controller: 'familiaresController'
       })
        .when('/familiar/:id', {
            templateUrl: 'vistas/familiar.html',
            controller: 'familiaController',
            controllerAs: 'fliaCtrl'
       })
        .otherwise({
            redirectTo: '/'
       });
}]);
})();

