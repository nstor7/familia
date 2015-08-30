(function(){
    angular.module('familia.services', [])
    .factory('familiaService', ['$http', '$q', '$filter' function($http, $q, $filter){
    
        
        function all(){
            var deferred = $q.defer();
            
            $http.get('/familiares.json')
            .success(function (data){
            deferred.resolve(data)
            });
            
            return deferred.promise;
            
        }
        function porId(id){
            all().then(function (data){
            var result = data.filter(function (familiar){
                                return familiar.id === id;
                                });                    
            });                        
        }
            
        return{
            all: all
        };
    }]);
})();