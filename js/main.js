window.addEventListener('load', function () {
  new Glider(document.querySelector('.crsllist'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.crslis',
    arrows: {
      prev: '.crslp',
      next: '.crsln',
    },
    responsive: [
      {
        //screen greater than >= 775px
        breakpoint: 450,
        settings: {
          //Set to auto and provide item width to adjusts to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        //screen greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
});
