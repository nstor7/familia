(function(){
    angular.module('familia.controllers', [])
   .controller('familiaresController' , [])
    .controller('familiaController', function(){
        this.familia = {
            id: 001,
            nombre: 'Sonia',
            parentezco: 'Mamá',
            vivienda: 'Villa Lucre',
            ocupaciones: ['Profesora, Remon Cantera', 'Liturgia, Santa María'],
            imagen: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/10612634_669406919803452_2235041199641646304_n.jpg?oh=1fb665bc2c8914348e0cab44986847c2&oe=56800AE4'
        };
    })
        .controller('tabsController', function(){
        this.tab = 1;
        this.selectTab = function(tab){
            this.tab = tab;
        };
    })
    
})();