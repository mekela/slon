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