/**
 * ROUTE: articles
 * @author Fabien Vauchelles <fabien@vauchelles.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp')
        .config(Routing);

    function Routing($stateProvider) {
        $stateProvider
            .state('annonce-preview', {
                url: '/annonce-preview',
                templateUrl: 'app/annonce-preview/annonce-preview.html',
                controller: 'AnnoncePreviewController'
        });
    }

})();
