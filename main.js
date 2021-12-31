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

    const card4 = document.querySelector(".card__inner4");
    card4.addEventListener("click", function (e) {
    card4.classList.toggle('is-flipped');
    });

    // Get all the images
    image_array = [
    'all images\\96C06788-0D72-42F7-B682-ED3F66D2F6BB.JPG',
    'all images\\669442A7-A7E1-4243-887D-A2A520D468CE.JPG',
    'all images\\C605DC33-BC37-4692-8FD5-4C66241ED64A.JPG',
    'all images\\D0B9A579-83FB-4A22-8444-A38EFF03CEA6.JPG',
    'all images\\DSC02817.JPEG',
    'all images\\DSC02867.JPEG',
    'all images\\DSC02912.JPEG',
    'all images\\DSC02983.JPEG',
    'all images\\DSC03022.JPEG',
    'all images\\F44D863F-2D7F-4CD4-A200-EA6219BB817F.JPG',
    'all images\\fb.jpg',
    'all images\\IMG_2317.JPG',
    'all images\\IMG_3577.JPG',
    'all images\\64608687510__5D94BA21-EA01-46B7-B75C-1147234B09FE.HEIC.jpg',
    'all images\\IMG_9472.HEIC.jpg',
    'all images\\IMG_7098.HEIC.jpg',
    'all images\\IMG_7068.HEIC.jpg',
    'all images\\IMG_7056.HEIC.jpg',
    'all images\\IMG_7053.HEIC.jpg',
    'all images\\IMG_6897.HEIC.jpg',
    'all images\\IMG_6309.HEIC.jpg',
    'all images\\IMG_6283.HEIC.jpg',
    'all images\\IMG_6253.HEIC.jpg',
    'all images\\IMG_6139.HEIC.jpg',
    'all images\\IMG_5834.HEIC.jpg',
    'all images\\IMG_5805.HEIC.jpg',
    'all images\\IMG_5453.HEIC.jpg',
    'all images\\IMG_5452.HEIC.jpg',
    'all images\\IMG_0663.HEIC.jpg',
    'all images\\IMG_0661.HEIC.jpg',
    'all images\\IMG_0423.HEIC.jpg',
    ]
    const randPhoto = document.getElementById('button_container');
    randPhoto.addEventListener("click", function(e){
        random_index = Math.floor(Math.random() * image_array.length);
        selected_image = image_array[random_index]
        // Display the image
        document.getElementById('myPhoto').src = `${selected_image}`
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