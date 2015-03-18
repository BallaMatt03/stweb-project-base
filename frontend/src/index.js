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

    function Config() {
    }

})();
