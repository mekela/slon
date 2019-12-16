$(document).ready(function(){

    //slider
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                arrows: false,
              }
            }, 
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
                breakpoint: 1280,
                settings: {
                    arrows: false,
                }
            }, 
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

    //accordion
    $( ".lk__table-accordion-trigger" ).click(function() {
        $( this ).toggleClass( "active" );
        $( this ).next().slideToggle( "fast" );
    });
    $( ".accordion-trigger" ).click(function() {
        $( this ).toggleClass( "active" );
        $( this ).next().slideToggle( "fast" );
    });

    //tabs
    $('.faq-links li a').click(function(event){
        event.preventDefault();
        $('.faq-links li a').removeClass('active');
        $(this).addClass('active');
        $('.faq-content').hide();
        $($(this).attr('href')).show();
    });

    
    
});

$(window).load(function(){

});

$(window).resize(function(){

});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

window.onload = function () {
  var el, c1;
  el = document.querySelector('.circle-chart--with-track');
  c1 = new CircleChart(el, { trackColour: '#f1f4fa', colour: '#33cc66' });
  if (window.MutationObserver) {
    var config = { attributes: false, childList: true, characterData: false };
    var observer = new MutationObserver(function(mutations) {
        console.log(c1.inner.innerText);
        c1.changeValue(parseFloat(c.inner.innerHTML));  
    });
    observer.observe(c1.elem, config);
  }
}




