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
  const captionFadeDurationMs = 520;
  const captionOnlyImageHoldMs = 2000;
  const parsedInitialDelayMs = Number(slideshow.dataset.autoplayInitialDelay);
  const initialDelayMs = Number.isFinite(parsedInitialDelayMs) && parsedInitialDelayMs >= 0
    ? parsedInitialDelayMs
    : intervalMs;
  const mobilePanMedia = window.matchMedia('(max-width: 900px) and (prefers-reduced-motion: no-preference)');
  const imageMotionDurationMs = Math.max(2600, intervalMs - 450);
  const resetImageMotion = (slide) => {
    const image = slide?.querySelector('.image');
    if (!image) {
      return;
    }

    image.style.transition = 'none';
    image.style.transform = '';
  };
  const restartImageMotion = (slide, index) => {
    const image = slide?.querySelector('.image');
    if (!image || !mobilePanMedia.matches) {
      resetImageMotion(slide);
      return;
    }

    const moveFromX = index % 2 === 0 ? '-6%' : '6%';
    const moveToX = index % 2 === 0 ? '4%' : '-4%';

    image.style.transition = 'none';
    image.style.transform = `translate3d(${moveFromX}, 0, 0) scale(1.16)`;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        image.style.transition = `transform ${imageMotionDurationMs}ms cubic-bezier(0.19, 0.72, 0.22, 1)`;
        image.style.transform = `translate3d(${moveToX}, 0, 0) scale(1.03)`;
      });
    });
  };
  const setCaptionVisibility = (slide, isVisible) => {
    const caption = slide?.querySelector('.caption');
    if (!caption) {
      return;
    }

    caption.style.transition = `opacity ${captionFadeDurationMs}ms ease, transform ${captionFadeDurationMs}ms ease`;
    caption.style.opacity = isVisible ? '1' : '0';
    caption.style.transform = isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 12px, 0)';
  };

  // Determine starting slide
  let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (currentIndex === -1) {
    currentIndex = 0;
    slides[0].classList.add('is-active');
  }

  slides.forEach((slide, index) => {
    setCaptionVisibility(slide, index === currentIndex);
    if (index !== currentIndex) {
      resetImageMotion(slide);
    }
  });
  restartImageMotion(slides[currentIndex], currentIndex);

  let autoplayTimer;
  let autoplayCaptionFadeTimer;
  let autoplayStartTimer;
  let isTransitioning = false;

  const syncPagination = (activeIndex) => {
    paginationItems.forEach((item, index) => {
      item.classList.toggle('is-active', index === activeIndex);
      item.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
    });
  };

  const setActiveSlide = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= slides.length || nextIndex === currentIndex) {
      return;
    }

    resetImageMotion(slides[currentIndex]);
    slides[currentIndex].classList.remove('is-active');
    slides[nextIndex].classList.add('is-active');
    restartImageMotion(slides[nextIndex], nextIndex);

    syncPagination(nextIndex);

    currentIndex = nextIndex;
  };

  const transitionToSlide = (nextIndex, options = {}) => {
    const { outgoingAlreadyHidden = false } = options;

    if (isTransitioning || nextIndex < 0 || nextIndex >= slides.length || nextIndex === currentIndex) {
      return;
    }

    isTransitioning = true;
    const activeSlide = slides[currentIndex];
    const incomingSlide = slides[nextIndex];

    const completeTransition = () => {
      setCaptionVisibility(incomingSlide, false);
      setActiveSlide(nextIndex);
      window.requestAnimationFrame(() => {
        setCaptionVisibility(incomingSlide, true);
        isTransitioning = false;
        scheduleAutoplayCycle();
      });
    };

    if (outgoingAlreadyHidden) {
      completeTransition();
      return;
    }

    setCaptionVisibility(activeSlide, false);
    window.setTimeout(completeTransition, captionFadeDurationMs);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    transitionToSlide(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    transitionToSlide(prevIndex);
  };

  const clearAutoplayTimers = () => {
    window.clearTimeout(autoplayStartTimer);
    window.clearTimeout(autoplayCaptionFadeTimer);
    window.clearTimeout(autoplayTimer);
  };

  const scheduleAutoplayCycle = () => {
    clearAutoplayTimers();

    const fadeOutLeadMs = Math.max(0, intervalMs - captionFadeDurationMs - captionOnlyImageHoldMs);
    const switchDelayMs = fadeOutLeadMs + captionFadeDurationMs + captionOnlyImageHoldMs;

    autoplayCaptionFadeTimer = window.setTimeout(() => {
      if (isTransitioning) {
        return;
      }
      setCaptionVisibility(slides[currentIndex], false);
    }, fadeOutLeadMs);

    autoplayTimer = window.setTimeout(() => {
      if (isTransitioning) {
        return;
      }
      const nextIndex = (currentIndex + 1) % slides.length;
      transitionToSlide(nextIndex, { outgoingAlreadyHidden: true });
    }, switchDelayMs);
  };

  const restartAutoplay = () => {
    setCaptionVisibility(slides[currentIndex], true);
    restartImageMotion(slides[currentIndex], currentIndex);
    scheduleAutoplayCycle();
  };

  const startAutoplay = () => {
    clearAutoplayTimers();

    if (initialDelayMs === 0) {
      scheduleAutoplayCycle();
      return;
    }

    autoplayStartTimer = window.setTimeout(() => {
      scheduleAutoplayCycle();
    }, initialDelayMs);
  };

  nextButton?.addEventListener('click', () => {
    goNext();
  });

  prevButton?.addEventListener('click', () => {
    goPrev();
  });

  paginationItems.forEach((item) => {
    item.addEventListener('click', () => {
      const index = Number(item.dataset.slide);
      if (!Number.isNaN(index)) {
        if (index === currentIndex) {
          restartAutoplay();
          return;
        }
        transitionToSlide(index);
      }
    });
  });

  slideshow.addEventListener('mouseenter', () => {
    clearAutoplayTimers();
  });

  slideshow.addEventListener('mouseleave', () => {
    restartAutoplay();
  });

  mobilePanMedia.addEventListener('change', () => {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        restartImageMotion(slide, index);
        return;
      }
      resetImageMotion(slide);
    });
  });

  syncPagination(currentIndex);
  startAutoplay();
})();
