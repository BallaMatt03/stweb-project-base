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
            .state('annonce-details', {
                url: '/annonce-details/:id',
                templateUrl: 'app/annonce-detail/annonce-details.html',
                controller: 'AnnonceDetailsController'
        });
    }

})();
