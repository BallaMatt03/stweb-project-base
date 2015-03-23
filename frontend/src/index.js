/**
 * Application configuration
 * @author Fabien Vauchelles <fabien@vauchelles.com>
 */

(function() {
    'use strict';


    angular
        .module('myApp', [
            'ui.router',
            'ngMessages'
        ])
        .config(Config);

    function Config($urlRouterProvider) {
    	// Default root at startup
        $urlRouterProvider.otherwise('/annonce-preview');
    }

})();
