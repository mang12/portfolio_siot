$(document).ready(function(){

});

function show_img1(){
    $(".main_img").delay(6000).animate({"margin-left":"-1450px"},"slow");//2
    $(".main_img").delay(6000).animate({"margin-left":"-2900px"},"slow");//3
    $(".main_img").delay(6000).animate({"margin-left":"-1450px"},"slow");//2
    $(".main_img").delay(6000).animate({"margin-left":"0px"},"slow");//1

}
setInterval("show_img1()",5000);