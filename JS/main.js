$(document).ready(function() {

  //Social Media Spin
   $('.social-media').on('mouseover', function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
     $(this).addClass('animated rotateIn').one(animationEnd, function() {
       $(this).removeClass('animated ' + 'rotateIn');
     });
   });


// Say HELLO
var text = ["Say Hello", "Manda um Oi", "Di Hola", "Dit Salut", "Ciao", "Hallo", "Namaste"];
 var counter = 0;
 var elem = document.getElementById("textChange");
 setInterval(change, 2000);
 function change() {
  elem.innerHTML = "<h1>" + text[counter] + "</h1>";
     counter++;
     if(counter >= text.length) { counter = 0; }
 }


// About ME
  $('.aboutMe').on("mouseenter", function() {
    $('.aboutMeText').fadeIn('slow');
    $('.right').css("background-image", "none");
    $('.right').css("background-color", "black");

  }).on("mouseleave", function() {
    $('.aboutMeText').fadeOut('slow');
    $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/e_grayscale/v1462082611/back_fn3x3j.png)");
  });


//Somos Rie
  $('.somosRie').on("mouseenter", function() {
      $('.right').css({
        backgroundImage: "url(http://res.cloudinary.com/rany/image/upload/v1462075264/Captura_de_pantalla_2016-03-26_a_la_s_15.27.33_sbdr9e.png)",
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      });
      $('.somosRieText').fadeIn('slow');
    }).on("mouseleave", function() {
      $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/e_grayscale/v1462082611/back_fn3x3j.png)");
      $('.somosRieText').fadeOut('slow');
    });

//Skills
    $('.skills').on("mouseenter", function() {
      $('.right').css("background-image", "none");
      $('.right').css("background-color", "black");
      $('.skillsText').fadeIn("slow");

    }).on("mouseleave", function() {
      $('.skillsText').fadeOut('slow');
      $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/e_grayscale/v1462082611/back_fn3x3j.png)");
    });

//Cook App
$('.cookrApp').on("mouseenter", function() {
    $('.right').css({
      backgroundImage: "url(http://res.cloudinary.com/rany/image/upload/v1462086511/ookr_wh2aa7.png)",
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    });
    $('.cookrAppText').show();
  }).on("mouseleave", function() {
    $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/e_grayscale/v1462082611/back_fn3x3j.png)");
    $('.cookrAppText').fadeOut('slow');
  });



});
