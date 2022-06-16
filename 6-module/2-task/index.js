import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  #elem;
  constructor(product) {
    this.product = product;
    this.#elem = this.#container();
  }

  #container() {
    let card = createElement(this.#template);
    let button = card.querySelector('.card__button');

    button.addEventListener('click', this.#buttonClik);
    return card;
  }

  //создание события
  #buttonClik = () => {
    let event = new CustomEvent('product-add', {
      detail: this.product.id,
      bubbles: true
    });

    this.#elem.dispatchEvent(event);
  }

  get #template() {
    let name = this.product.name;
    let image = this.product.image;
    let price = this.product.price.toFixed(2);


    return `
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${image}" class="card__image" alt="product">
            <span class="card__price">€${price}</span>
      </div>
    <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    </div>
  `;
  }

  get elem() {
    return this.#elem;
  }
}