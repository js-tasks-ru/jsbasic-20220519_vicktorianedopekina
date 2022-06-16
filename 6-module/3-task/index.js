import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #elem

  constructor(slides) {
    this.slides = slides;
    this.#elem = this.render();
  }

  render() {
    const slider = createElement(this.#slider);

    //перелистывание
    const arrow = slider.querySelectorAll('.carousel__arrow');
    const arrowRight = slider.querySelector('.carousel__arrow_right');
    const arrowLeft = slider.querySelector('.carousel__arrow_left');
    const inner = slider.querySelector('.carousel__inner');
    const slide = slider.querySelector('.carousel__slide');
    let sliderPosition = 0;
    let slideNumber = 1;

    arrowLeft.style.display = 'none';

    arrow.forEach(el => {
      el.addEventListener('click', (event) => {
        const target = event.target;


        if (target.closest('.carousel__arrow_right')) {
          arrowLeft.style.display = '';

          slideNumber += 1;
          sliderPosition += slide.offsetWidth;
          inner.style.transform = `translateX(-${sliderPosition}px)`;



          if (slideNumber >= inner.children.length) {
            arrowRight.style.display = 'none';
          }
        }

        if (target.closest('.carousel__arrow_left')) {
          arrowRight.style.display = '';


          slideNumber -= 1;
          sliderPosition -= slide.offsetWidth;
          inner.style.transform = `translateX(-${sliderPosition}px)`;

          if (slideNumber == 1) {
            arrowLeft.style.display = 'none';
          }
        }
      });
    });


    //событие
    const addButton = Array.from(slider.querySelectorAll('.carousel__button'));

    addButton.forEach((el) => {
      el.addEventListener('click', (event) => {
        let target = event.target;

        let coustonEvent = new CustomEvent('product-add', {
          detail: target.closest('.carousel__slide').getAttribute('data-id'),
          bubbles: true
        });

        this.elem.dispatchEvent(coustonEvent);
      });
    });


    return slider;
  }


  get #slider() {
    return `
    <div class = "carousel">

    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
    
    ${this.slides.map(el => `

    <div class="carousel__slide" data-id="${el.id}">
        <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${el.price.toFixed(2)}</span>
          <div class="carousel__title">${el.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>

      `).join('')}


    </div>

    </div>
    `;
  }

  get elem() {
    return this.#elem;
  }

}
