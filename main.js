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

    
    // read more buttons for my timeline
    let blur = document.getElementById('blur');
    let pop = document.getElementById('popup');
    let pop2 = document.getElementById('popup2');
    let pop3 = document.getElementById('popup3');
    let pop4 = document.getElementById('popup4');
    let pop5 = document.getElementById('popup5');
    $('.bottom a').click(function(){
        blur.classList.toggle('active');
    });
    $('#firstRead').click(function(){
        pop.classList.toggle('active');
    });
    $('#firstPop').click(function(){
        blur.classList.toggle('active');
        pop.classList.toggle('active');
    });
    $('#secondRead').click(function(){
        pop2.classList.toggle('active');
    });
    $('#secondPop').click(function(){
        blur.classList.toggle('active');
        pop2.classList.toggle('active');
    });
    $('#thirdRead').click(function(){
        pop3.classList.toggle('active');
    });
    $('#thirdPop').click(function(){
        blur.classList.toggle('active');
        pop3.classList.toggle('active');
    });
    $('#fourthRead').click(function(){
        pop4.classList.toggle('active');
    });
    $('#fourthPop').click(function(){
        blur.classList.toggle('active');
        pop4.classList.toggle('active');
    });
    $('#fifthRead').click(function(){
        pop5.classList.toggle('active');
    });
    $('#fifthPop').click(function(){
        blur.classList.toggle('active');
        pop5.classList.toggle('active');
    });
});