export default class Cart {
  cartItems = []; // [product: {...}, count: N]
  cartItem = {};

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    const cartItem = {
      product: {},
      count: 0,
    };

    if (product === null || product === undefined) {
      return;
    }

    if (!this.isEmpty()) {
      let Id = this.cartItems.find(item => product.id === item.product.id);

      if (Id === undefined) {
        cartItem.product = product;
        cartItem.count = 1;
        this.cartItems.push(cartItem);
      }

      if (Id !== undefined) {
        Id.count += 1;
      }
    }

    if (this.isEmpty()) {
      cartItem.product = product;
      cartItem.count = 1;
      this.cartItems.push(cartItem);
    }

    this.onProductUpdate(this.cartItem);
  }

  updateProductCount(productId, amount) {
    this.cartItems.map((item) => {

      if (item.product.id === productId) {
        item.count += amount;
        this.cartItem = item;

        if (item.count === 0) {
          this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
        }
      }
    });

    this.onProductUpdate(this.cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    let totalCount = 0;
    this.cartItems.map((item) => {
      totalCount += item.count;
    });
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.map(item => totalPrice += item.product.price * item.count);
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

