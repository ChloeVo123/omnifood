$(document).ready(function () {

    /* For Sticky nav bar jQuery*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })

    /* Scrolling on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })

    /* Navigation Scrolling */
    $('a[href*="#"]')
        .not('[href="#"]')        
        .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }}
        });

})