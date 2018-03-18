(function () {
    'use strict';

    angular
        .module('formApp')
        .value('FormDataModel', FormDataModel);

    function FormDataModel() {
        //номер заказа
        this.id = 1;

        //способ оплаты
        this.paymentType = 0;

        //способ доставки
        this.deliveryType = 0;

        //пункт выдачи
        this.deliveryPoint = '';

        //личная скидка постоянного покупателя
        this.personalDiscount = 22;

        //сумма покупки
        this.sum = 0;
        this.sumBeforeDiscounts = 0;
        this.sumBeforePersonalDiscount = 0;

        //список выбранных товаров
        this.items = [
          {
            id: 1,
            article: 2866169,
            description: 'Маленькие куколки. Модели из разных материалов, Хоббитека',
            size: 0,
            color: 'белый',
            imageMobile: 'img/2866169-1.jpg',
            imageDesktop: 'img/2866169.jpg',
            count: 1,
            increase: increase,
            decrease: decrease,
            price: 370,
            discount: 0,
            promo: 10,
            canApplyPersonalDiscount: false,
            sale: false,
            newCollection: false
          },
          {
            id: 2,
            article: 3706400,
            description: 'Брелок-фонарик для ключей LEGO Friends (цвет: лиловый), Lego.',
            size: 0,
            color: 'лиловый',
            imageMobile: 'img/3706400-1.jpg',
            imageDesktop: 'img/3706400.jpg',
            count: 1,
            increase: increase,
            decrease: decrease,
            price: 500,
            discount: 30,
            promo: 10,
            canApplyPersonalDiscount: false,
            sale: true,
            newCollection: false
          },
          {
            id: 3,
            article: 3885915,
            description: 'Сумка, EVITA',
            size: 0,
            color: 'зеленый',
            imageMobile: 'img/3885915-1.jpg',
            imageDesktop: 'img/3885915.jpg',
            count: 1,
            increase: increase,
            decrease: decrease,
            price: 6101,
            discount: 0,
            promo: 25,
            canApplyPersonalDiscount: true,
            sale: false,
            newCollection: true
          },
        ];

        this.calcSum = calcSum;

        this.calcSum();

        function calcSum() {
          var self = this;

          //итоговая сумма покупки
          this.sum = this.items.reduce(function(sum, item) {
            var priceAfterDiscount = item.price;
            priceAfterDiscount = item.discount>0 ? (priceAfterDiscount - priceAfterDiscount*item.discount/100) : priceAfterDiscount;
            priceAfterDiscount = item.promo>0 ? (priceAfterDiscount - priceAfterDiscount*item.promo/100) : priceAfterDiscount;
            return sum + (item.canApplyPersonalDiscount? (priceAfterDiscount*item.count - priceAfterDiscount*item.count*self.personalDiscount/100) : priceAfterDiscount*item.count);
          }, 0);
          //округление
          this.sum = Math.floor(this.sum);

          //сумма до всех скидок
          this.sumBeforeDiscounts = this.items.reduce(function(sum, item) {
            return sum + item.price*item.count;
          }, 0);

          //сумма до персональной скидки
          this.sumBeforePersonalDiscount = this.items.reduce(function(sum, item) {
            var priceAfterDiscount = item.price;
            priceAfterDiscount = item.discount>0 ? (priceAfterDiscount - priceAfterDiscount*item.discount/100) : priceAfterDiscount;
            priceAfterDiscount = item.promo>0 ? (priceAfterDiscount - priceAfterDiscount*item.promo/100) : priceAfterDiscount;
            return sum + priceAfterDiscount*item.count;
          }, 0);

          //округление
          this.sumBeforePersonalDiscount= Math.floor(this.sumBeforePersonalDiscount);
        }

        function increase() {
          this.count++;
        }

        function decrease() {
          this.count = this.count > 1 ? this.count - 1 : 1;
        }
    }

})();
