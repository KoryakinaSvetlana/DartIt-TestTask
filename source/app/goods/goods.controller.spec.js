describe('goods controller testing', function() {

  var $controller;

  // Load our module
  beforeEach(angular.mock.module('formApp'));

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('should exist', function() {
      expect($controller('GoodsController')).toBeDefined();
  });

  describe('calc sum testing', function() {
    it('calc sum', function() {

      //заказ из одного товара
      var order = new Order();
      //личная скидка постоянного покупателя
      order.personalDiscount = 22;
      var item = new OrderItem();
      item.id = 3;
      item.article = 3885915;
      item.price = 6101;
      item.promo = 25
      item.canApplyPersonalDiscount = true;
      order.addItem(item);

      order.calc();

      expect(order.sum).toEqual(3569);
    });
  });
});
