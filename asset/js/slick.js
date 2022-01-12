window.addEventListener("load", () => {
    $(".slide-img").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slick-prev"><i class="fas fa-arrow-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-arrow-right" aria-hidden="true"></i></div>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
});