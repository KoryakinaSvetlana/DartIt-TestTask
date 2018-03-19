(function () {
    'use strict';

    angular
        .module('formApp')
        .controller('FormController', FormController);

    FormController.$inject = [];

    function FormController() {
        var vm = this;
        vm.title = 'Оформление заказа';
        // we will store all of our form data in this object
        vm.formData = GetMockFormData();
        vm.formData.calc();

        vm.$onInit = activate;
        vm.getData = getData;

        //methods
        function activate() {
            console.log(vm.title + ' loaded!');
        }

        function getData() {
            return vm.formData;
        }
    }

    function GetMockFormData() {
      var data = new Order();
      var item;
      //номер заказа
      data.id = 1;
      //способ оплаты 0 - наличные 1 - мой баланс 2 - онлайн картой 3 - яндекс деньги 4 - вэб моней 5 - пэйпал
      data.paymentType = 0;
      //способ доставки 0 - самовывоз 1 - курьер 2 - постамат
      data.deliveryType = 0;
      //пункт выдачи
      data.deliveryPoint = 'dp1';
      //личная скидка постоянного покупателя
      data.personalDiscount = 22;
      //сумма покупки
      data.sum = 0;
      data.sumBeforeDiscounts = 0;
      data.sumBeforePersonalDiscount = 0;

      //товары в заказе
      item = new OrderItem();
      item.id = 1;
      item.article = 2866169;
      item.description = 'Маленькие куколки. Модели из разных материалов, Хоббитека';
      item.color = 'белый';
      item.imageMobile ='img/2866169-1.jpg';
      item.imageDesktop ='img/2866169.jpg';
      item.price = 370;
      item.promo = 10;
      data.addItem(item);

      item = new OrderItem();
      item.id = 2;
      item.article = 3706400;
      item.description = 'Брелок-фонарик для ключей LEGO Friends (цвет: лиловый), Lego.';
      item.color = 'лиловый';
      item.imageMobile ='img/3706400-1.jpg';
      item.imageDesktop ='img/3706400.jpg';
      item.price = 500;
      item.discount = 30;
      item.promo = 10;
      item.sale = true;
      data.addItem(item);

      item = new OrderItem();
      item.id = 3;
      item.article = 3885915;
      item.description = 'Сумка, EVITA';
      item.color = 'зеленый';
      item.imageMobile = 'img/3885915-1.jpg';
      item.imageDesktop = 'img/3885915.jpg';
      item.price = 6101;
      item.promo = 25
      item.canApplyPersonalDiscount = true;
      item.newCollection = true;
      data.addItem(item);

      return data;
    }
})();
