(function () {
    'use strict';

    angular
        .module('formApp')
        .component('deliveryComponent', {
            templateUrl:  'app/delivery/delivery.html',
            controller: 'DeliveryController',
            controllerAs: 'vm',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^formComponent'
            },
            bindings: {
                // send a changeset of 'formData' upwards to the parent component called 'formComponent'
                formData: '<'
            }
        })
})();
