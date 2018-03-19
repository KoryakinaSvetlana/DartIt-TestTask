(function () {
    'use strict';

    angular
        .module('formApp')
        .controller('GoodsController', GoodsController);

    GoodsController.$inject = [];

    function GoodsController() {
        var vm = this;
        vm.title = 'Список выбранных товаров.';
        vm.formData = {};

        vm.$onInit = activate;
        vm.calc = calc;

        //methods

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Goods loaded!');
        }

        function calc() {
          vm.formData.calc();
        }

    }
})();
