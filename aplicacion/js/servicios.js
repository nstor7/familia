(function(){
    angular.module('familia.services', [])
        .factory('familiaService', ['$http', '$q', function ($http, $q){
            function all(){
                var deferred = $q.defer();
                
                $http.get('/familiares.json')
                .success(function(data){
                    deferred.resolve(data);
                });
                
                return deferred.promise;
            };
            
            function byId(id) {
                var deferred = $q.defer();
                
                all().then(function (data){
                    var results = data.filter(function (familia) {
                        return familia.id === id;
                });

                    if (results.length > 0) {
                        deferred.resolve(results[0]);
                    } else {
                        deferred.reject();
                    };

                })
                return deferred.promise;
            }
            return {
                all: all,
                byId: byId
            };
        }]);
})();