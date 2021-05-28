$(document).ready(function(){

    //menu btn
    $('.menubtn').click(function(){
        $('.navibar .menu').toggleClass("active")

    });

    $('.menu').click(function(){
        $('.navibar .menu').toggleClass("active")

    });

    const copyText = document.querySelector("#copyText");
    const button = document.querySelector(".btn");
    const tooltip = document.querySelector(".tooltip");
    button.addEventListener('click', function(){
        copyText.select();
        document.execCommand("copy");
        button.focus();
        tooltip.classList.add("show");
        setTimeout(function(){
            tooltip.classList.remove("show");
        }, 700);
    });
});