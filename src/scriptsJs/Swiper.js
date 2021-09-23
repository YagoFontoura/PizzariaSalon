const  swiper = new Swiper('.swiper', {
  slidesPerView:1,  
  pagination: {
      el: ".swiper-pagination"
    },
    mouseWheel:true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true
      },
      1300: {
        slidesPerView: 3,
        setWrapperSize:true
      }
    }
  });