$(document).ready(function(){
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false,
    });

    $('.trending-items__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false,
    });

    $(".blog__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        prevArrow: "<button  type='button' class='slick-prev slick-btn'><img src='./../images/left_arrow.svg'></button>",
        nextArrow: "<button  type='button' class='slick-next slick-btn'><img src='./../images/right_arrow.svg'></button>",
    })

  });
          