$(function(){
$('.slider__iner, .news__slider-inner'/*СТВОРЮЄМО "СЛАЙДЕРСТВО"*/).slick({/*підключили js/slick.min.js у slider__iner*/
nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
infinite: false /* ліквідовуємо прокрутку по кругу, свойство "infinite" - є в коді*/
}); 
$('select').styler(); /*підключення плагіна для select*/

$ ('.header__btn-menu').on('click', function() { /*виклик меню при кліці по іконці (для МОБІЛОК)*/
    $('.menu ul').slideToggle();
}) 

});