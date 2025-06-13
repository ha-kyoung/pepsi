$(document).ready(function(){ //시작

  // .search-box
  $(".search-box").hide();
  $(".search-btn").click(function(){
    $(".search-box").fadeIn();
  })
  $(".close-btn").click(function(){
    $(".search-box").fadeOut();
  })


  // .mgnb
  $(".menu-box").hide();
  $(".menu-btn").click(function(){
    $(".menu-box").fadeIn();
  })
  $(".close-btn").click(function(){
    $(".menu-box").fadeOut();
  })


  // main-banner slide
  const main_slide = new Swiper('.main-slide', {
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "bullets", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },
    loop: true,
    autoplay: {
    // 자동슬라이드
    delay: 3000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
    disableOnInteraction: false,
  },
  speed: 1500,
  });


  // menu slide
  const menu_slide = new Swiper('.menu-slide', {
    loop: true, // 슬라이드 반복 (centeredSlides 사용안됨)
    slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: { // 반응형 슬라이드
      765: {
        // 1000px 이상
        slidesPerView: 3.8,
      },
      1024: {
        // 1400px 이상
        slidesPerView: 5.5,
      },
    },
  })


  // food-slide
  const food_slide = new Swiper('.food-slide', {
    loop: true,
    slidesPerView: 1.1, // (기본 모바일)가로 한줄에 보이는 슬라이드 갯수
    spaceBetween: 30, // 슬라이드 간의 거리 px
    centeredSlides: true, // 첫번째 슬라이드가 정중앙에
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
    },
  });


  // #event
  $("#event .event-img ul li").not(":first").hide();
  $("#event .event-tit ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")

    let idx = $(this).index();
    $("#event .event-img ul li").eq(idx).fadeIn().siblings().hide();
  })


  // #product
  const tap_slide = new Swiper('.tap-slide', {
    loop: true,
    breakpoints: { // 반응형 슬라이드
      765: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 50,
      },
    },
  });

  const product_slide = new Swiper('.product-slide', {
    navigation: {
    nextEl: ".swiper-button-next", // 다음버튼
    prevEl: ".swiper-button-prev", // 이전버튼
    },
    thumbs: {
          swiper: tap_slide,
    },
  });


  // #story
  const story_slide = new Swiper('.story-slide', {
    loop: true,
    slidesPerView: 2, // (기본 모바일)가로 한줄에 보이는 슬라이드 갯수
    spaceBetween: 30, // 슬라이드 간의 거리 px
    centeredSlides: true,
    breakpoints: { // 반응형 슬라이드
    765: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },
  })
});