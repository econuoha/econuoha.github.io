$(document).ready(function(){

    //menu btn
    $('.menubtn').click(function(){
        $('.navibar .menu').toggleClass("active")

    });

    $('.menu').click(function(){
        $('.navibar .menu').toggleClass("active")

    });
    //lang card
    const card1 = document.querySelector(".card__inner1");
    card1.addEventListener("click", function (e) {
    card1.classList.toggle('is-flipped');
    });

    const card2 = document.querySelector(".card__inner2");
    card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped');
    });

    const card3 = document.querySelector(".card__inner3");
    card3.addEventListener("click", function (e) {
    card3.classList.toggle('is-flipped');
    });

});