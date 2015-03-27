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
            search: search,
            add : add,
            removeById : removeById,
            loadMostPopularCompetences : loadMostPopularCompetences
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
        /*add an annonce*/
        function add(newannonce) {
            return $http.post(BASE_URL, newannonce);
        }

        /*remove an annonce*/
        function removeById(_id) {
            return $http.delete(BASE_URL + '/' + _id);
        }

        /*get most popular competences*/
        function loadMostPopularCompetences(){
            return $http.get(BASE_URL + "/popularcompetences");
        }
    }
    
})();
