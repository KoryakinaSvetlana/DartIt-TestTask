(function() {
    'use strict';

    // Creating our angular app and inject ui-router
    // =============================================================================
    var app = angular.module('formApp', ['ui.router'])

    // Configuring our states
    // =============================================================================
    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to payment
            $urlRouterProvider.otherwise('/form/goods');

            $stateProvider
                // PARENT STATE: form state
                .state('form', {
                    url: '/form',
                    component: 'formComponent'
                })

                // NESTED STATES: child states of 'form' state
                // URL will become '/form/goods'
                .state('form.goods', {
                    url: '/goods',
                    component: 'goodsComponent'
                })

                // URL will become /form/delivery
                .state('form.delivery', {
                    url: '/delivery',
                    component: 'deliveryComponent'
                })

                // URL will become /form/payment
                .state('form.payment', {
                    url: '/payment',
                    component: 'paymentComponent'
                })

          }

    ]);

})();
