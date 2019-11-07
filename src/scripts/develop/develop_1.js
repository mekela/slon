$(document).ready(function(){

    //slider
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    });
    $('.region__items-slider').slick({
      infinite: true,
      dots: true,
    });

    //toggle
    $( ".footer__center h6" ).click(function() {
        $( this ).toggleClass( "active" );
    });

    //show slider
    $( ".review__show" ).click(function() {
        $( this ).parent().prev().toggle( "fast" );
        $( this ).parent().hide( "fast" );
    });

    //menu
    $( ".header__trigger" ).click(function() {
        $( '.mobile-menu' ).addClass( "active" );
        $( '.mobile-menu__overlay' ).show(  );
    });
    $( ".mobile-menu__overlay, .mobile-menu__close" ).click(function() {
        $( '.mobile-menu' ).removeClass( "active" );
        $( '.mobile-menu__overlay' ).hide(  );
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});