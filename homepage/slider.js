$(document).ready(function () {

    const isMobile = window.matchMedia("(max-width: 1200px)").matches;

    if (!isMobile) {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: ".slider-sec",
            start: "top 5%",
            end: "+=50%",
            pin: true,
            pinSpacing: true
        });
    }

    const owl = $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        navSpeed: 1000,
        rtl: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        navText: ['‹', '›'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: true
            }
        },
        onInitialized: function (event) {
            setTimeout(() => {
                showActiveSlideText();
            }, 200);
        },
        onChanged: function (event) {
            hideAllText();
            setTimeout(() => {
                showActiveSlideText();
            }, 300);
        }
    });

    function hideAllText() {
        $('.owl-item .header-content h1, .owl-item .header-content h2, .owl-item .header-content .line').css({
            'opacity': '0',
            'transition': 'none'
        });
    }

    function showActiveSlideText() {
        const activeSlide = $('.owl-item.active');

        if (activeSlide.length === 0) return;

        activeSlide.find('.line').css({
            'transform': 'scaleX(0)',
            'transition': 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        activeSlide.find('h1, h2').css({
            'transform': 'translateY(-30px)',
            'transition': 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        activeSlide.find('h4').css({
            'transform': 'translateY(30px)',
            'transition': 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => {
            activeSlide.find('.line').css({
                'opacity': '1',
                'transform': 'scaleX(1)'
            });
        }, 100);

        setTimeout(() => {
            activeSlide.find('h2').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 300);

        setTimeout(() => {
            activeSlide.find('h1').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 500);

        setTimeout(() => {
            activeSlide.find('h4').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 700);
    }

    $(document).on('click', '.owl-prev, .owl-next', function () {
        $(this).blur();
        setTimeout(() => {
            showActiveSlideText();
        }, 400);
    });

    let animationCheckInterval = setInterval(() => {
        const activeSlide = $('.owl-item.active');
        if (activeSlide.length > 0) {
            const h1Opacity = parseFloat(activeSlide.find('h1').css('opacity')) || 0;

            if (h1Opacity < 0.9) {
                showActiveSlideText();
            }
        }
    }, 2000);

    $(window).on('beforeunload', function () {
        clearInterval(animationCheckInterval);
    });
});