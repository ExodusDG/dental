const swiperText = new Swiper('.swiperText', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const customerSlider = new Swiper('.customerSlider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3.2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const productSlider = new Swiper('.productSlider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/* TABS GENERATE */

$.each($('.tabItem'), function (key, value) {
  $(this).addClass('tabClass_' + key)
  var button_name = $(this).attr('tab-name')
  $('.tabsMenu').append(`<p id="tab_` + key + `">` + button_name + `</p>`)
})

$(".tabsMenu").delegate("p", "click", function () {
  var activeNumber = $(this).attr('id').replace('tab_', '')
  var activeTab = 'tabClass_' + activeNumber;

  $(".tabsMenu p").removeClass('tabsMenuActive')
  $(this).addClass('tabsMenuActive')

  $('.tabItem').removeClass('tabVisible')

  $.each($('.tabItem'), function (key, value) {
    if ($(this).hasClass(activeTab)) {
      $(this).addClass('tabVisible')
    }
  })
});