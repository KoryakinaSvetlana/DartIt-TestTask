(function () {
    'use strict';

    angular
        .module('formApp')
        .controller('DeliveryController', DeliveryController);

    DeliveryController.$inject = [];

    function DeliveryController() {
        var vm = this;
        vm.title = 'Выберите способ доставки';
        vm.formData = {};

        vm.$onInit = activate;

        //methods

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Work feature loaded!');
        }
    }
})();
