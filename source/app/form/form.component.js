(function () {
    'use strict';

    angular
        .module('formApp')
        .component('formComponent', {
            templateUrl:  'app/form/form.html',
            controller: 'FormController',
            controllerAs: 'vm'
        })
})();
