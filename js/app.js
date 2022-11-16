$(function () {
       // DarkMode Start
       $('#mode').on('click', function () {
        $('body').toggleClass('darkMode');
        if ($('#mode').hasClass('fa-moon')) {
            $('#mode').addClass('fa-sun');
            $('#mode').removeClass('fa-moon');
        }else{
            $('#mode').removeClass('fa-sun');
            $('#mode').addClass('fa-moon');
        }
    })
    // DarkMode End

    // Preloader Start
    $(window).on('load', function () {
        $('#preloader').fadeOut(1000);
    })
    // Preloader End

     // Menu Fixed Start
     $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop();

        if (scrollSize > 110) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }

        // Back to Top
        if (scrollSize > 1000) {
            $('#backtoTop').show(500);
        } else {
            $('#backtoTop').hide(500);
        }
    })
    $('#backtoTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        })
    })
})