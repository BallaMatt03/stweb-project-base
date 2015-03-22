/**
 * ROUTE: newannonce
 * @author Fabien Lassié <fabien.lassie@gmail.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp')
        .config(Routing);

    function Routing($stateProvider) {
        $stateProvider
            .state('newannonce', {
                url: '/newannonce',
                templateUrl: 'app/newannonce/newannonce.html',
                controller: 'NewAnnonceController'
        });
    }

})();
