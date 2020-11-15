/* Show/Hide Menu bar */
$(document).ready(() => {
    'use strict';

    $(window).scroll(function () {
        'use strict';
        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59,0)'
            });
        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59,0.7)',
                'border-color': '#444'
            });
            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'
            });
            $('navbar-nav > li > a').css({
                'padding-top': '15px',
            });

        }
    })
});

//Add Smooth Scrolling
$(document).ready(() => {
    'use strict';
    $('.nav-item, #scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    })
});

//Active menu on item click
$(document).ready(function () {
    'use strict';
    $('.navbar-nav li a').click(function () {
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    })
});

//highlight menu item on scroll
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        $("section").each(function () {
            'use strict';
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});

//Add auto padding to header
$(document).ready(() => {
    'use strict';
    setInterval(() => {
        'use strict';
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        $(".header-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10);
});

//BXSlider
$(document).ready(function () {
    $('.slider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });
});

//Counter Increase by lib automatically
$(document).ready(function () {
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
})

//Add Animation/Initilize Wow Lib
$(document).ready(function () {
    'use strict';
    new WOW().init();
});


// Table Js
// $(document).ready(function () {
//     $('#dtHorizontalVerticalExample').DataTable({
//         "scrollX": true,
//         "scrollY": 200,
//     });
//     $('.dataTables_length').addClass('bs-select');
// });
// Basic example
$(document).ready(function () {
    $('#dtBasicExample').DataTable({
        "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
    });
    $('#dtHorizontalExample').DataTable({
        "scrollX": true,
        "scrollY": 200,
    });
    $('.dataTables_length').addClass('bs-select');
});