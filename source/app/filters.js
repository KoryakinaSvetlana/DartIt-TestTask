(function () {
    'use strict';

    angular
        .module('formApp')
        .filter('floor', FloorFilter);

        function FloorFilter() {
          return function(value) {
            return Math.floor(value);
          }
        }
})();
