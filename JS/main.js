// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {

    //Social Media Spin
    $('.social-media').on('mouseover', function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated rotateIn').one(animationEnd, function() {
            $(this).removeClass('animated ' + 'rotateIn');
        });
    });

    // Body

    var backgroundImageBlur = "url(CSS/images/mainbur.jpg)";
    var backgroundImageNormal = "url(CSS/images/main.jpg)";



    $(".rightText").each(function() {
        $(this).addClass('hidden');
    });

    $('h1').on('click', function() {
        $('.left-text-links').removeClass('active');
        $(".rightText").addClass('hidden')
    })

    $('.left-text-links').on("click", function(e) {

        var id = $(this).attr('data-type');
        $('.left-text-links').removeClass('active');
        $(this).addClass('active');

        if (id === 'resume') {
            $('.left-text-links').removeClass('active');
            $(".rightText").addClass('hidden')
            return;
        } else {
            e.preventDefault();
            $(".rightText").each(function() {
                $(this).addClass('hidden');
                if ($(this).attr('id') == id) {
                    $(this).removeClass('hidden');
                }
            });
        }
    });

    // Message Console
    if (typeof console === 'object') {
        console.log(
            '\n' +
            '%c ♥ Hey you! Thanks for visiting.\n' +
            'If you wanna know a bit more about me or my portfolio just say hi!\n' +
            'I’d love to hear what you think!\n' +
            '\n' +
            '— Rany \n', 'color: #B9AEE0; font-size: medium'
        );
    }


// Popup resume

    $('a.left-text-links.popup').click(function() {
        var resumeBox = $(this).attr('href');
        $(resumeBox).fadeIn(300);



        // Add the mask to body
        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300);

        return false;
    });

    // When clicking on the button close or the mask layer the popup closed
    $('a.close, #mask').on('click', function() {
        $('#mask , .resume-popup').fadeOut(300, function() {
            $('#mask').remove();
        });
        return false;
    });


});