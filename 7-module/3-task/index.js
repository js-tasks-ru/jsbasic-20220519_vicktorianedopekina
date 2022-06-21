import createElement from '../../assets/lib/create-element.js';


export default class StepSlider {
  #elem

  constructor({ steps, value = 0 }) {
    this.elem = this.render();
    this.steps = steps;
    this.value = value;
    this.#steps();
  }

  render() {
    let slider = createElement(this.#slider);

    slider.addEventListener('click', (event) => {
      this.sliderClick(event);
    });

    return slider;
  }

  #steps() {
    for (let i = 0; i < this.steps - 1; i++) {
      const sliderSteps = this.elem.querySelector('.slider__steps');

      sliderSteps.insertAdjacentHTML('beforeend', `<span></span>`);
    }
  }

  sliderClick(event) {
    const slider = document.querySelector('.slider');
    const sliderStepsInner = slider.querySelector('.slider__steps');
    const sliderSteps = sliderStepsInner.querySelectorAll('span');
    let sliderValue = slider.querySelector('.slider__value');
    let segments = this.steps - 1;
    let leftPosition = event.clientX - sliderStepsInner.getBoundingClientRect().left;
    let leftRelative = leftPosition / sliderStepsInner.offsetWidth;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    let valuePercents = value / segments * 100;


    sliderValue.innerHTML = value;

    sliderSteps.forEach((el, i) => {
      el.classList.remove('slider__step-active');
      if (value == i) {
        el.classList.add('slider__step-active');
      }
    });

    const sliderThumd = slider.querySelector('.slider__thumb');
    sliderThumd.style.left = `${valuePercents}%`;

    const sliderProgress = slider.querySelector('.slider__progress');
    sliderProgress.style.width = `${valuePercents}%`;

    //событие
    let customEvent = new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    });

    this.elem.dispatchEvent(customEvent);
  }

  #slider() {
    return `
    <div class="slider">
  
    <div class="slider__thumb"">
      <span class="slider__value">0</span>
    </div>
  
    <div class="slider__progress"></div>
  
    <div class="slider__steps">
      <span class="slider__step-active"></span>
    </div>
  </div>
  `;
  }
}
