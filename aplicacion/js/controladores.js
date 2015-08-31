(function(){
    angular.module('familia.controllers', [])
   .controller('familiaresController', ['$scope', 'familiaService', function ($scope, familiaService) {
      familiaService.all().then(function (data) {
        $scope.familiares = data;
      });
   }])
    .controller('familiaController', ['$scope', 'familiaService' function($scope, familiaService){
        $scope.familiar = [];
        familiaService.porId('001')
        .then(function(data){
        $scope.familiar = data;
        
    });
    }])
        .controller('tabsController', function(){
        this.tab = 1;
        this.selectTab = function(tab){
            this.tab = tab;
        };
    })
    
})();