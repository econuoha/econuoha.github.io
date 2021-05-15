$(document).ready(function(){

    //menu btn
    $('.menubtn').click(function(){
        $('.navibar .menu').toggleClass("active")
        $('.socialbar a').toggleClass("gone")
    });

    $('.menu').click(function(){
        $('.navibar .menu').toggleClass("active")
        $('.socialbar a').toggleClass("gone")
    });
});