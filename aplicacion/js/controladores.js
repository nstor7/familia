(function(){
    angular.module('familia.controllers', [])
   .controller('familiaresController', ['$scope', 'familiaService', function($scope, familiaService){
       familiaService.all().then(function(data){
        $scope.familiares = data;
       });
   }])
    .controller('familiaController', ['$scope', '$routeParams', 'familiaService', function($scope, $routeParams, familiaService){
       var id = $routeParams.id;
        $scope.familia = {};
        
        familiaService.byId(id)
        .then(function (data) {
        $scope.familia = data;
        });
    }])
        .controller('tabsController', function(){
        this.tab = 1;
        this.selectTab = function(tab){
            this.tab = tab;
        };
    });
    
})();