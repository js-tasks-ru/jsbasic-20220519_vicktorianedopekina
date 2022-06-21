import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #elem
  constructor() {
    this.template = this.#modal();
    this.#elem = this.render();
  }


  render() {
    this.open();
    this.#closing();
  }


  open() {
    const body = document.querySelector('body');

    body.classList.add('is-modal-open');
    body.prepend(this.template);
  }


  close() {
    const body = document.querySelector('body');

    body.classList.remove('is-modal-open');
    body.removeChild(body.lastChild);

    this.template.remove();
  }


  setTitle(str) {
    const title = document.querySelector('.modal__title');

    title.innerHTML = str;
    return title;
  }


  setBody(content) {
    const modalBody = document.querySelector('.modal__body');

    modalBody.textContent = '';
    modalBody.insertAdjacentElement('afterbegin', content);
    return modalBody;
  }


  #closing() {
    const closeButton = document.querySelector('.modal__close');

    closeButton.addEventListener('click', () => {
      this.close();
    });

    document.addEventListener('keydown', (event) => {

      if (event.code === 'Escape') {
        this.close();
      }
    }, { once: true });
  }


  #modal() {
    return createElement(`
    <div class="modal">

    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title"></h3>
      </div>

      <div class="modal__body"></div>
    </div>

  </div>
    `);
  }
}
