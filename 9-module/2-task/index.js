import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {

    let carousel = new Carousel(slides);
    let carouselInner = document.querySelector('[data-carousel-holder]');
    carouselInner.append(carousel.elem);


    let menu = new RibbonMenu(categories);
    let menuInner = document.querySelector('[data-ribbon-holder]');
    menuInner.append(menu.elem);


    let slider = new StepSlider({ steps: 5, value: 3 });
    let sliderInner = document.querySelector('[data-slider-holder]');
    sliderInner.append(slider.elem);


    let cartIcon = new CartIcon();
    let cartIconInner = document.querySelector('[data-cart-icon-holder]');
    cartIconInner.append(cartIcon.elem);
    let cart = new Cart(cartIcon);


    let responce = await fetch('products.json');
    let product = await responce.json();



    let productInner = document.querySelector('[data-products-grid-holder]');
    productInner.removeChild(productInner.firstElementChild);
    let productGrid = new ProductsGrid(product);
    productInner.append(productGrid.elem);


    document.body.querySelector('.slider').addEventListener('slider-change', (event) => {
      productGrid.updateFilter({ maxSpiciness: event.detail });
    });


    document.body.addEventListener('product-add', (event) => {

      product.map((el) => {
        if (el.id === event.detail) {
          cart.addProduct(el);
        }
      });

    });

    document.body.querySelector('.ribbon').addEventListener('ribbon-select', (event) => {
      productGrid.updateFilter({ category: event.detail });
    });


    document.body.addEventListener('change', () => {
      productGrid.updateFilter({ noNuts: document.getElementById('nuts-checkbox').checked });
    });

    document.body.addEventListener('change', () => {
      productGrid.updateFilter({ vegeterianOnly: document.getElementById('vegeterian-checkbox').checked });
    });
  }
}
