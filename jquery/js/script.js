
$(function(){  
 'use strict';
 //Calculate Body Padding top deppend on navbar height
 $('body').css('paddingTop', $('.navbar').innerHeight() );// padding top of body = navbar height with her padding  bach kol maytghayr padding dyal navbar ytghayr padding top dyal body dynamiquement  exemple bach tban dik services t7t navbar wmatghatich 3liha  et navbar fixed
//smothly scroll to element
 $('.navbar li a').click(function (e) {
    e.preventDefault(); //liman3 idhar # flink, liman3 iftiradi dyal link
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
    }, 1000);

});
//Add Active Class on navbar link and remove from siblings
$('.navbar li a').click(function () {
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
});

$(window).scroll (function () {
    //sync navbar links with sections
   $('.block').each(function () {
    if($(window).scrollTop() > $(this).offset().top){

     var blockID = $(this).attr('id'); //exemple mli 3aydkhal l area dyal services
     $('.navbar li a').removeClass('active');
     $('.navbar li a[data-scroll="' + blockID +'"]').addClass('active'); //exemple mli 3aydkhal l area dyal services 3aymchi y9alb 3la nafs id lifnavbar wy3mla active + remove class active from les autres
    }
    });
    // Scroll To Top Button
    var scrollToTop = $('.scroll-to-top');
    if ($(window).scrollTop() >= 1000) {
        if (scrollToTop.is(':hidden')) {
        scrollToTop.fadeIn(400);
    } }
    else {
         scrollToTop.fadeOut(400);
    }
    });
    //Click On scroll to top to Go up
    $('.scroll-to-top').click(function(event) {
   
            e.preventDefault(); 
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        
        });

// buttons with effects
$('.from-left').hover(function() {
    $(this).find('span').eq(0).animate({
   width: '100%'
    },200);
}, function() {

    $(this).find('span').eq(0).animate({
        width:0
         },200);
        });

        $('.border-left').hover(function() {
            $(this).find('span').eq(0).animate({
           width: '100%'
            },200);
        }, function() {
        
            $(this).find('span').eq(0).animate({
                width:0
                 },200);
                });




    });
    
    
    




