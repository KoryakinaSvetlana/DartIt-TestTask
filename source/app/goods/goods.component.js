(function () {
    'use strict';

    angular
        .module('formApp')
        .component('goodsComponent', {
            templateUrl:  'app/goods/goods.html',
            controller: 'GoodsController',
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
