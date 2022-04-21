

var swiper1 = new Swiper('.swiper1', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });

  var swiper2 = new Swiper('.swiper2', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  
  }); 