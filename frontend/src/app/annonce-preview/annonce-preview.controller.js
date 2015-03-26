/**
 * CONTROLLER: AnnoncePreviewController
 * @author Fabien Vauchelles <fabien@vauchelles.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp')
        .controller('AnnoncePreviewController', AnnoncePreviewController);

    function AnnoncePreviewController($scope, AnnonceService) {
        $scope.searchByCompetence = searchByCompetence;
        $scope.search = search;


        $scope.annonces = [];
        search();

        ////////////

        function searchByCompetence(competence) {
            $scope.searchText = competence;

            search();
        }

        function search() {
            AnnonceService
                .search($scope.searchText)
                .then(function(annonces) {
                    $scope.annonces = annonces;
                });
        }

        /*
        $scope.removeById = removeById;

        // Load articles
        $scope.annonces = [];
        search();


        ////////////

        function searchByTag(tag) {
            $scope.searchText = tag;

            search();
        }

        function removeById(_id) {
            ArticlesService.removeById(_id)
                .then(function() {
                    for (var i = 0; i < $scope.articles.length; ++i) {
                        var article = $scope.articles[i];

                        if (_id === article._id) {
                            $scope.articles.splice(i, 1);
                            break;
                        }
                    }
                })
                .catch(function() {
                    alert("Can't delete article");
                });
        }*/
    }


})();
