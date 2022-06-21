import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  #elem;
  constructor(categories) {
    this.categories = categories;
    this.#elem = this.render();
  }

  render() {
    const menu = createElement(this.#menu);

    const arrow = menu.querySelectorAll('.ribbon__arrow');
    const arrowLeft = menu.querySelector('.ribbon__arrow_left');
    const arrowRight = menu.querySelector('.ribbon__arrow_right');
    const inner = menu.querySelector('.ribbon__inner');

    arrow.forEach(el => {
      arrowLeft.classList.remove('ribbon__arrow_visible');

      el.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.ribbon__arrow_right')) {
          inner.scrollBy(350, 0);

          arrowLeft.classList.add('ribbon__arrow_visible');
        }

        if (target.closest('.ribbon__arrow_left')) {
          inner.scrollBy(-350, 0);

          arrowRight.classList.add('ribbon__arrow_visible');
        }
      });
    });

    inner.addEventListener('scroll', () => {
      let scrollLeft = inner.scrollLeft;
      let scrollWidth = inner.scrollWidth;
      let clientWidth = inner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      }

      if (scrollRight == 0) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      }
    });

    const link = Array.from(menu.querySelectorAll('.ribbon__item'));

    link.forEach(el => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        let customEvent = new CustomEvent('ribbon-select', {
          detail: target.getAttribute('data-id'),
          bubbles: true
        });

        this.elem.dispatchEvent(customEvent);
      });
    });

    return menu;
  }

  get #menu() {
    return `
    <div class = "ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
      ${this.categories.map(el => `
        <a href="#" class="ribbon__item" data-id="${el.id}">${el.name}</a>
      `).join('')}
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

    </div>
    `;
  }

  get elem() {
    return this.#elem;
  }
}
