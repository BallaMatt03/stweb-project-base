/**
 * CONTROLLER: NewAnnonceController
 * @author Fabien Lassié <fabien.lassie@gmail.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp')
        .controller('AnnonceDetailsController', AnnonceDetailsController);

    function AnnonceDetailsController($scope, $stateParams, AnnonceService) {
       $scope.getAnnonceById = getAnnonceById;

       $scope.annonce = {};
       getAnnonceById($stateParams.id);

        function getAnnonceById(_id){
            AnnonceService.getAnnonceById(_id)
                .then(function(annonce){
        					$scope.annonce = annonce;
        				});
       }
    }

})();
