(function () {
    'use strict';

    angular
        .module('formApp')
        .controller('PaymentController', PaymentController);

    PaymentController.$inject = [];

    function PaymentController() {
        var vm = this;
        vm.title = 'Выберите способ оплаты';
        vm.formData = {};

        vm.$onInit = activate;

        //methods

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Address feature loaded!');
        }
    }
})();
