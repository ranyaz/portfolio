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


var backgroundImageBlur = "url(http://res.cloudinary.com/rany/image/upload/e_blur_region:654/v1462285879/option5_zzg5iu.jpg)";
var backgroundImageNormal = "url(http://res.cloudinary.com/rany/image/upload/v1462285879/option5_zzg5iu.jpg";

// About ME
  $('.aboutMe').on("mouseenter", function() {
    $('.projectsText').hide();
    $('.aboutMeText').fadeIn('slow');
    $('.right').css({ backgroundImage: backgroundImageBlur});
  }).on("mouseleave", function() {
    $('.aboutMeText').fadeOut('slow');
    $('.right').css("background-image", backgroundImageNormal ).fadeIn('slow');
  });


//Somos Rie
  $('.somosRie').on("click", function() {
    $('.cookrAppText').hide();
    $('.meninasTechText').hide();
    $('.right').css({
      backgroundImage: "none",
      backgroundColor: "white",
      });
      $('.somosRieText').fadeIn('slow');
    });


//Cook App
$('.cookrApp').on("click", function() {
  $('.somosRieText').hide();
  $('.meninasTechText').hide();
  $('.right').css({
    backgroundImage: "none",
    backgroundColor: "white",
    });
    $('.cookrAppText').fadeIn('slow');
  });


  //Cook App
  $('.meninasTech').on("click", function() {
    $('.somosRieText').hide();
    $('.cookrAppText').hide();
    $('.right').css({
      backgroundImage: "none",
      backgroundColor: "white",
      });
      $('.meninasTechText').fadeIn('slow');
    });


//Skills
    $('.skills').on("mouseenter", function() {
      $('.projectsText').hide();
      $('.right').css({ backgroundImage: backgroundImageBlur});
      $('.skillsText').fadeIn("slow");
    }).on("mouseleave", function() {
      $('.skillsText').fadeOut('slow');
      $('.right').css("background-image", backgroundImageNormal ).fadeIn('slow');
    });


//Projects
  $('.projects').on("click", function(){
    $('.previa').hide();
    $('.projectsText').show();
    $('.right').css({
      backgroundImage: "none",
      backgroundColor: "white",
      });
  });
  $('.projects').on('mouseenter', function(){
    $('.projectsText').hide();
    $('.right').css( "background-image", "none");
    $('.previa').show();
  }).on("mouseleave", function(){
    $('.previa').hide();

  });

// Message
if( typeof console === 'object' ) {
    console.log(
        '\n' +
        'Hey you! Thanks for visiting.\n' +
        'If you wanna know a bit more about me or my portfolio just say hi!\n' +
        '\n' +
        '    _      _      _\n' +
        '  >(.)__ <(.)__ =(.)__\n' +
        '   (___/  (___/  (___/\n'+
        '\n' +
        'I’d love to hear what you think!\n' +
        '\n' +
        '— Rany \n'
    );
}


});
