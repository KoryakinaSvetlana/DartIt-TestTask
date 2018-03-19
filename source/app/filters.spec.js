describe('floor filter testing', function() {

  var $filter;

  // Load our module
   beforeEach(angular.mock.module('formApp'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns 0 when given 0.2', function() {
    var floor = $filter('floor');
    expect(floor(0.2)).toEqual(0);
  });

  it('returns 0 when given 0.99', function() {
    var floor = $filter('floor');
    expect(floor(0.99)).toEqual(0);
  });
});
