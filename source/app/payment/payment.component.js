(function () {
    'use strict';

    angular
        .module('formApp')
        .component('paymentComponent', {
            templateUrl:  'app/payment/payment.html',
            controller: 'PaymentController',
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
