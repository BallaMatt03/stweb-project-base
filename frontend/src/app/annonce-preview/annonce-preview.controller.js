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
        $scope.loadMostPopularCompetences = loadMostPopularCompetences;
        $scope.removeById = removeById;


        $scope.annonces = [];
        search();

        $scope.mostpopularcompetences = [];
        loadMostPopularCompetences();

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

        function loadMostPopularCompetences(){
            AnnonceService
                .loadMostPopularCompetences()
                .then(function(competences){
                    $scope.mostpopularcompetences = competences;
            });
        }

        function removeById(_id) {
            AnnonceService.removeById(_id)
                .then(function() {
                    for (var i = 0; i < $scope.annonces.length; ++i) {
                        var annonce = $scope.annonces[i];

                        if (_id === annonce._id) {
                            $scope.annonces.splice(i, 1);
                            break;
                        }
                    }
                })
                .catch(function() {
                    alert("Can't delete annonce");
                });
        }
    }


})();
