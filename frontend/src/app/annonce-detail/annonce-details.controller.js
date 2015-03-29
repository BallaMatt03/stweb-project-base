/**
 * CONTROLLER: NewAnnonceController
 * @author Fabien Lassié <fabien.lassie@gmail.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp')
        .controller('AnnonceDetailsController', AnnonceDetailsController);

    function AnnonceDetailsController($scope, $state, $stateParams, AnnonceService) {
       $scope.getAnnonceById = getAnnonceById;
       $scope.removeById = removeById;

       $scope.annonce = {};
       getAnnonceById($stateParams.id);

        function getAnnonceById(_id){
            AnnonceService.getAnnonceById(_id)
                .then(function(annonce){
        					$scope.annonce = annonce;
        				});
       }

       function removeById(_id){
           console.log("controller.removeById");
           AnnonceService.removeById(_id)
              .then(function(annonce){
                  $state.go('annonce-preview');
              })
              .catch(function() {
                  console.log("Can't delete annonce");
              });
       }
    }

})();
