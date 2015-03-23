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
        $scope.annonces = AnnonceService.findAll();

        function searchByCompetence(competence) {
            $scope.searchText = competence;

            //search();
        }

        /*function search() {
            AnnonceService
                .search($scope.searchText)
                .then(function(annonces) {
                    $scope.annonces = annonces;
                });
        }*/
        /*
        $scope.removeById = removeById;

        // Load articles
        $scope.annonces = [];
        search();


        ////////////

        function search() {
            ArticlesService
                .search($scope.searchText)
                .then(function(articles) {
                    $scope.articles = articles;
                });
        }

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
