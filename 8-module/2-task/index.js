import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  #elem

  constructor(products) {
    this.products = products;
    this.filters = {};
    this.#elem = this.#template();
    this.inner = this.#elem.querySelector('.products-grid__inner');
    this.renderCard(products);
  }

  updateFilter(filters) {

    Object.assign(this.filters, filters);

    let product = this.products;

    if (this.filters.vegeterianOnly) { product = product.filter((product) => product.vegeterian === true); }
    if (this.filters.noNuts) { product = product.filter((product) => product.nuts == undefined); }
    if (this.filters.maxSpiciness) { product = product.filter((product) => product.spiciness <= this.filters.maxSpiciness); }
    if (this.filters.category) { product = product.filter((product) => product.category === this.filters.category); }

    this.inner.innerHTML = '';
    this.renderCard(product);
  }


  renderCard(products) {
    products.map((product) => {
      let card = new ProductCard(product);
      this.inner.append(card.elem);
    });
  }

  #template() {
    return createElement(`
    <div class = "products-grid">
      <div class = "products-grid__inner"></div>
    </div>
    `);
  }

  get elem() {
    return this.#elem;
  }
}

