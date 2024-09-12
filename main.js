const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".bannerContent", {
    ...scrollRevealOptions,
  });

  ScrollReveal().reveal(".div__ventajas", {
    ...scrollRevealOptions,
    interval: 500,
  });

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,  // Muestra 3 slides por defecto
      spaceBetween: 30,  // Espacio entre las slides
      slidesPerGroup: 3, // Desliza 3 slides a la vez
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      breakpoints: {
          // Cuando la pantalla sea >= 1024px
          1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
          },
          // Cuando la pantalla sea >= 768px
          768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
          },
          // Cuando la pantalla sea >= 480px
          480: {
              slidesPerView: 1,
              slidesPerGroup: 1,
          }
      }
  });
  });