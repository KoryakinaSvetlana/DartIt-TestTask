function Order() {
  //номер заказа
  this.id = 1;

  //способ оплаты
  this.paymentType = 0;

  //способ доставки
  this.deliveryType = 0;

  //пункт выдачи
  this.deliveryPoint = '';

  //личная скидка постоянного покупателя
  this.personalDiscount = 0;

  this.items = [];

  //сумма покупки
  this.sum = 0;
  this.beforeDiscountsSum = 0;
  this.beforePersonalDiscountSum = 0;

  this.addItem = addItem;
  this.calcSum = calcSum;
  this.calcBeforeDiscountsSum = calcBeforeDiscountsSum;
  this.calcPersonalDiscountSum = calcPersonalDiscountSum;
  this.calc = calc;

  function addItem(item) {
    this.items.push(item);
  }

  function calcSum() {
    var self = this;
    this.sum = this.items.reduce(function(sum, item) {
      var priceAfterDiscount = item.price;
      priceAfterDiscount = item.discount>0 ? (priceAfterDiscount - priceAfterDiscount*item.discount/100) : priceAfterDiscount;
      priceAfterDiscount = item.promo>0 ? (priceAfterDiscount - priceAfterDiscount*item.promo/100) : priceAfterDiscount;
      return sum + (item.canApplyPersonalDiscount? (priceAfterDiscount*item.count - priceAfterDiscount*item.count*self.personalDiscount/100) : priceAfterDiscount*item.count);
    }, 0);
    //округление
    this.sum = Math.floor(this.sum);
  }

  function calcBeforeDiscountsSum() {
    //сумма до всех скидок
    this.beforeDiscountsSum = this.items.reduce(function(sum, item) {
      return sum + item.price*item.count;
    }, 0);
  }

  function calcPersonalDiscountSum() {
    //сумма до персональной скидки
    this.beforePersonalDiscountSum = this.items.reduce(function(sum, item) {
      var priceAfterDiscount = item.price;
      priceAfterDiscount = item.discount>0 ? (priceAfterDiscount - priceAfterDiscount*item.discount/100) : priceAfterDiscount;
      priceAfterDiscount = item.promo>0 ? (priceAfterDiscount - priceAfterDiscount*item.promo/100) : priceAfterDiscount;
      return sum + priceAfterDiscount*item.count;
    }, 0);

    //округление
    this.beforePersonalDiscountSum= Math.floor(this.beforePersonalDiscountSum);
  }

  function calc() {
    this.calcBeforeDiscountsSum();
    this.calcPersonalDiscountSum();
    this.calcSum();
  }
}
