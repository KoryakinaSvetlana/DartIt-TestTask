describe('delivery controller testing', function() {

  var $controller;

  // Load our module
  beforeEach(angular.mock.module('formApp'));

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('should exist', function() {
      expect($controller('DeliveryController')).toBeDefined();
  });
});
