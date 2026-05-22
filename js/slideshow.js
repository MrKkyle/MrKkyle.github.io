(() => {
  const slideshow = document.querySelector('.home-slideshow');

  if (!slideshow) {
    return;
  }

  const slides = Array.from(slideshow.querySelectorAll('.slide'));
  const paginationItems = Array.from(slideshow.querySelectorAll('.pagination .item'));
  const prevButton = slideshow.querySelector('.arrow.prev');
  const nextButton = slideshow.querySelector('.arrow.next');

  if (!slides.length) {
    return;
  }

  const defaultIntervalMs = 5000;
  const parsedIntervalMs = Number(slideshow.dataset.autoplayInterval);
  const intervalMs = Number.isFinite(parsedIntervalMs) && parsedIntervalMs > 0
    ? parsedIntervalMs
    : defaultIntervalMs;
  const parsedInitialDelayMs = Number(slideshow.dataset.autoplayInitialDelay);
  const initialDelayMs = Number.isFinite(parsedInitialDelayMs) && parsedInitialDelayMs >= 0
    ? parsedInitialDelayMs
    : intervalMs;

  let currentIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.classList.contains('is-active'))
  );

  if (currentIndex === -1) {
    currentIndex = 0;
    slides[0].classList.add('is-active');
  }

  let autoplayTimer;
  let autoplayStartTimer;

  const setActiveSlide = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= slides.length || nextIndex === currentIndex) {
      return;
    }

    slides[currentIndex].classList.remove('is-active');
    slides[nextIndex].classList.add('is-active');

    paginationItems.forEach((item, index) => {
      item.classList.toggle('is-active', index === nextIndex);
      item.setAttribute('aria-current', index === nextIndex ? 'true' : 'false');
    });

    currentIndex = nextIndex;
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setActiveSlide(prevIndex);
  };

  const restartAutoplay = () => {
    window.clearTimeout(autoplayStartTimer);
    window.clearInterval(autoplayTimer);
    autoplayTimer = window.setInterval(goNext, intervalMs);
  };

  const startAutoplay = () => {
    window.clearTimeout(autoplayStartTimer);
    window.clearInterval(autoplayTimer);

    if (initialDelayMs === 0) {
      goNext();
      autoplayTimer = window.setInterval(goNext, intervalMs);
      return;
    }

    autoplayStartTimer = window.setTimeout(() => {
      goNext();
      autoplayTimer = window.setInterval(goNext, intervalMs);
    }, initialDelayMs);
  };

  nextButton?.addEventListener('click', () => {
    goNext();
    restartAutoplay();
  });

  prevButton?.addEventListener('click', () => {
    goPrev();
    restartAutoplay();
  });

  paginationItems.forEach((item) => {
    item.addEventListener('click', () => {
      const index = Number(item.dataset.slide);
      if (!Number.isNaN(index)) {
        setActiveSlide(index);
        restartAutoplay();
      }
    });
  });

  slideshow.addEventListener('mouseenter', () => {
    window.clearTimeout(autoplayStartTimer);
    window.clearInterval(autoplayTimer);
  });

  slideshow.addEventListener('mouseleave', () => {
    restartAutoplay();
  });

  startAutoplay();
})();
