function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrow = document.querySelectorAll('.carousel__arrow');
  const carousel = document.querySelector('.carousel__inner');
  const carouselWidth = carousel.offsetWidth;//длинна фото в карусели
  let carouselPosition = 0;

  arrowLeft.style.display = 'none';


  arrow.forEach(el => {
    el.addEventListener('click', (event) => {
      const target = event.target;

      //прослушка на правую кнопку
      if (target.closest('.carousel__arrow_right')) {
        arrowLeft.style.display = '';//показываем левую кнопку при клике на правую

        carouselPosition += carouselWidth;
        carousel.style.transform = `translateX(-${carouselPosition}px)`;//перелистываем

        if (carouselPosition == (carouselWidth * 3)) {
          arrowRight.style.display = 'none';//скрываем правую кнопку в конце карусели
        }
      }

      //прослушка на левую кнопку
      if (target.closest('.carousel__arrow_left')) {
        arrowRight.style.display = '';//показываем правую кнопку

        carouselPosition -= carouselWidth;
        carousel.style.transform = `translateX(-${carouselPosition}px)`;

        if (carouselPosition == 0) {
          arrowLeft.style.display = 'none';//скрываем левую кнопку при возврате в начало
        }
      }
    });
  });
}