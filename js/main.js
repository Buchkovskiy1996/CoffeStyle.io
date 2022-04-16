$(function(){
  
  // Делаем функцию нажатие на кнопку меню появлание списка

$('.menu__btn, .menu a').on('click', function(){
  $('.menu__item').toggleClass('menu__item--active')
});
$('.menu__btn').on('click', function(){
  $('.menu__btn').toggleClass('menu__btn--active')
});

// Делаем плавний скролл

$(".menu a, .logo__footer, .menu__footer a").on("click", function (e) {
  e.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
  
});
