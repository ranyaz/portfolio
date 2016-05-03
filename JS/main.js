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
    $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/v1462285879/option5_zzg5iu.jpg");
  });


//Somos Rie
  $('.somosRie').on("mouseenter", function() {
    $('.right').css({
      backgroundImage: "none",
      backgroundColor: "white",
      });
      $('.somosRieText').fadeIn('slow');
    }).on("mouseleave", function() {
      $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/v1462285879/option5_zzg5iu.jpg)");
      $('.somosRieText').hide();
    });

//Skills
    $('.skills').on("mouseenter", function() {
      $('.right').css("background-image", "none");
      $('.right').css("background-color", "black");
      $('.skillsText').fadeIn("slow");

    }).on("mouseleave", function() {
      $('.skillsText').fadeOut('slow');
      $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/v1462285879/option5_zzg5iu.jpg)");
    });


//Cook App
$('.cookrApp').on("mouseenter", function() {
  $('.right').css({
    backgroundImage: "none",
    backgroundColor: "white",
    });
    $('.cookrAppText').fadeIn('slow');
  }).on("mouseleave", function() {
    $('.right').css("background-image", "url(http://res.cloudinary.com/rany/image/upload/v1462285879/option5_zzg5iu.jpg)");
    $('.cookrAppText').hide();
  });



});
