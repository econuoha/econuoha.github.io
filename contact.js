$(document).ready(function(){

    //menu btn
    $('.menubtn').click(function(){
        $('.navibar .menu').toggleClass("active")

    });

    $('.menu').click(function(){
        $('.navibar .menu').toggleClass("active")

    });

    const focusMethod = function getFocus(){
        document.getElementById("myButton").focus();
    }

    const copyText = document.querySelector("#copyText");
    const button = document.querySelector(".btn");
    const tooltip = document.querySelector(".tooltip");
    button.addEventListener('click', function(){
        copyText.select();
        document.execCommand("copy");
        focusMethod();
        tooltip.classList.add("show");
        setTimeout(function(){
            tooltip.classList.remove("show");
        }, 700);
    });
});