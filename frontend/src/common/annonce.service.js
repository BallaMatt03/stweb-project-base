/**
 * SERVICE: AnnonceService
 * @author Matthias Ballarini
 */

(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('AnnonceService', AnnonceService);

    function AnnonceService($http) {

        var BASE_URL = 'http://localhost:9000/annonces';

        var factory = {
            search: search
        };

        return factory;

        ////////////

        function search(searchText) {
            var config;

            if (searchText) {
                config = {
                    params: {
                        search: searchText
                    }
                };
            } else {
                config = {};
            }

            return $http
                .get(BASE_URL, config)
                .then(function(response) {
                    return response.data;
                });
        }
    }
    
})();
