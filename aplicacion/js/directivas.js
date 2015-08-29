(function(){
    angular.module('familia.directives', [])
    .directive('familiaPersonal', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/familia-personal.html'
        };
    })
    .directive('familiaNombre', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/familia-nombre.html'
        };
    })
    .directive('familiaImagen', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/familia-imagen.html'
        };
    })
    .directive('familiaTrabajos', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/familia-trabajos.html'
        };
    })
   .directive('familiaComentario', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/familia-comentario.html',
            controller: function(){
                this.comments = [];
        this.comment = [];
        this.show = false;
        this.toggle = function(){
            this.show = !this.show;
        };
        this.anonimoCambio = function(){
            if(this.comment.anonimo){
                this.comment.email = "";
            };
        };
        this.addComment = function(){
            this.comment.date = Date.now();
            this.comments.push(this.comment);
            this.comment =[];
        };
            },
            controllerAs: 'cmtsCtrl'
        };
        
    })
    
   .directive('tabDirective', function(){
        return {
            restrict: 'E',
            templateUrl: 'parcial/tab-menu.html',
            controller: function(){
                this.tab = 1;
        this.selectTab = function(tab){
            this.tab = tab;
        };
            },
            controllerAs: 'tabs'
        };
    });
})();