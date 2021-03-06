/**
 * CONTROLLER: NewAnnonceController
 * @author Fabien Lassié <fabien.lassie@gmail.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp')
        .controller('NewAnnonceController', NewAnnonceController);

    function NewAnnonceController($scope, $state, AnnonceService) {
        // Define function
        $scope.add = add;

        // Init article
        $scope.newannonce = {
            poste: '',
            entreprise: '',
            logo: '',
            experience: '',
            salaire: '',
            lieu: '',
            competences: [],
            description : ''
        };

        $scope.competencesline = '';


        ////////////
        
        function add() {
            // Transform competencesline to tag
            $scope.newannonce.competences = convertCompetenceslineToCompetences($scope.competencesline);

            // Add new annonce and go to the main page
            AnnonceService.add($scope.newannonce).then(function() {
                $state.go('annonce-preview');
            }); 
        }
    }

    /**
     * Convert a string of competences, separated by comma
     * to an array of competences
     */
    function convertCompetenceslineToCompetences(competencesline) {
        competencesline = competencesline.trim().toLowerCase();
        if ( competencesline.length <= 0 ) {
            return [];
        }

        var competences = competencesline.split(',');
        for ( var i = 0; i < competences.length; ++i ) {
            // Remove extra spaces
            competences[i] = competences[i].trim();
        }

        return competences;
    }

})();
