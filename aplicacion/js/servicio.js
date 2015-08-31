(function(){
    angular.module('familia.services', [])
    .factory('familiaService', ['$http', '$q' function($http, $q){
    
        
        function all(){
            var deferred = $q.defer();
            
            $http.get('/familiares.json',[cache: true])
            .success(function (data){
            deferred.resolve(data)
            });
            
            return deferred.promise;
            
        };
        function porId(id){
            all().then(function (data){
            var result = data.filter(function (familiar){
                                return familiar.id === id;
                                });                    
            });       
            if(result.length > 0){
                                
                deferred.resolve(result[0]);
             
                                }else{
    deferred.reject();
 };
        };
            
        return{
            all: all,
            porId: PorId
        };
    }]);
})();