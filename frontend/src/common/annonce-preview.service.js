/**
 * SERVICE: AnnoncePreviewService
 * @author Matthias Ballarini
 */

(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('AnnoncePreviewService', AnnoncePreviewService);

    function AnnoncePreviewService() {

        // Init with 3 annonces
        var annonces = [{
            "_id": 0,
            "poste": "Développeur Java",
            "entreprise": "PSA Peugeot Citroën",
            "logo" : "LOGO",
            "experience": 'aucune',
            "salaire": '35000 - 50000',
            "lieu": 'Nogent Sur Marne',
            "competence": ["java", "design", "agile"]
        }, {
            "_id": 1,
            "poste": "Ingénieur Testeur",
            "entreprise": "Aldebaran Softbank Group",
            "logo" : "LOGO",
            "experience": '3 ans',
            "salaire": '35000 - 50000',
            "lieu": 'Issy Les Moulineaux',
            "competence": ["python", "test", "pytest"]
        }, {
            "_id": 2,
            "poste": "Chef de Projet",
            "entreprise": "Mosanto",
            "logo" : "LOGO",
            "experience": '1 an',
            "salaire": '50000 - 75000',
            "lieu": 'Montreuil',
            "competence": ["marketing", "c++", "django"]
        }];

        var factory = {
            findAll: findAll
        };

        return factory;


        ////////////

        function findAll() {
            var copy = angular.copy(annonces);

            return copy;
        }
    }

})();
