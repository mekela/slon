'use strict';

$(document).ready(function () {

    //slider
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                arrows: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                arrows: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
    $('.region__items-slider').slick({
        infinite: true,
        dots: true
    });

    //toggle
    $(".footer__center h6").click(function () {
        $(this).toggleClass("active");
    });

    //show slider
    $(".review__show").click(function () {
        $(this).parent().prev().toggle("fast");
        $(this).parent().hide("fast");
    });

    //menu
    $(".header__trigger").click(function () {
        $('.mobile-menu').addClass("active");
        $('.mobile-menu__overlay').show();
    });
    $(".mobile-menu__overlay, .mobile-menu__close").click(function () {
        $('.mobile-menu').removeClass("active");
        $('.mobile-menu__overlay').hide();
    });

    //accordion
    $(".lk__table-accordion-trigger").click(function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle("fast");
    });
    $(".accordion-trigger").click(function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle("fast");
    });

    //tabs
    $('.faq-links li a').click(function (event) {
        event.preventDefault();
        $('.faq-links li a').removeClass('active');
        $(this).addClass('active');
        $('.faq-content').hide();
        $($(this).attr('href')).show();
    });
});

$(window).load(function () {});

$(window).resize(function () {});

// Initialize and add the map

function initMap(e) {
    var a,
        t,
        i = new google.maps.StyledMapType([{
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            color: "#002e63"
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            color: "none"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#c9b2a6"
        }]
    }, {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#dcd2be"
        }]
    }, {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#ae9e90"
        }]
    }, {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#eeeeee"
        }]
    }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#f18c18"
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{
            color: "#eeeeee"
        }]
    }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#f18c18"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
            color: "#dadada"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#dadada"
        }]
    }, {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{
            color: "#dadada"
        }]
    }, {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#dadada"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#898989"
        }]
    }, {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{
            color: "#dadada"
        }]
    }, {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#8f7d77"
        }]
    }, {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#ebe3cd"
        }]
    }, {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
            color: "#dfd2ae"
        }]
    }, {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{
            color: "#e0e6ec"
        }]
    }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#e0e6ec"
        }]
    }], {
        name: "Styled Map"
    }),
        c = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 47.0202844,
            lng: 28.8335028
        },
        zoom: 14,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"]
        }
    }),
        l = new google.maps.InfoWindow();
    for (t = 0; t < 3; t++) {
        a = new google.maps.Marker({
            position: new google.maps.LatLng(officess[t].lat, officess[t].lng),
            map: c
        }), google.maps.event.addListener(a, "click", function (e, a) {
            return function () {
                l.setContent(officess[a].message), l.open(c, e);
            };
        }(a, t));
    }c.mapTypes.set("styled_map", i), c.setMapTypeId("styled_map");
}

window.onload = function () {
    var el, c1;
    el = document.querySelector('.circle-chart--with-track');
    c1 = new CircleChart(el, { trackColour: '#f1f4fa', colour: '#33cc66' });
    if (window.MutationObserver) {
        var config = { attributes: false, childList: true, characterData: false };
        var observer = new MutationObserver(function (mutations) {
            console.log(c1.inner.innerText);
            c1.changeValue(parseFloat(c.inner.innerHTML));
        });
        observer.observe(c1.elem, config);
    }
};