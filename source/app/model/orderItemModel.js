function OrderItem() {
  this.id = 0;
  this.article = 0;
  this.description = '';
  this.size = 0;
  this.color = '';
  this.imageMobile = '';
  this.imageDesktop = '';
  this.count = 1;
  this.price = 0;
  this.discount = 0;
  this.promo = 0;
  this.canApplyPersonalDiscount = false;
  this.sale = false;
  this.newCollection = false;

  this.increase = increase;
  this.decrease = decrease;

  function increase() {
    this.count++;
  }

  function decrease() {
    this.count = this.count > 1 ? this.count - 1 : 1;
  }
}
