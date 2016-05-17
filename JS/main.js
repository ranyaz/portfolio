$(document).ready(function() {

//Social Media Spin
   $('.social-media').on('mouseover', function() {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
     $(this).addClass('animated rotateIn').one(animationEnd, function() {
       $(this).removeClass('animated ' + 'rotateIn');
     });
   });


// Say HELLO
  var text = ["Say Hello", "Diga oi", "Di Hola", "Dit Salut", "Saluta", "Namaste"];
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
    $('.resumeText').hide();
    $('.skillsText').hide();
    $('.projectsText').hide();
    $('.previa').hide();
    $('.aboutMeText').fadeIn('slow');
    $('.right').css({ backgroundImage: backgroundImageBlur});
  }).on("mouseleave", function() {
    $('.aboutMeText').hide();
    $('.right').css("background-image", backgroundImageNormal ).fadeIn('slow');
  });


//Somos Rie
  $('.somosRie').on("click", function() {
    $('.cookrAppText').hide();
    $('.meninasTechText').hide();
    $('.previa').hide();
    $('.somosRieText').fadeIn('slow');
    });

//Cook App
  $('.cookrApp').on("click", function() {
    $('.somosRieText').hide();
    $('.meninasTechText').hide();
    $('.previa').hide();
    $('.cookrAppText').fadeIn('slow');
    });

//MeninasTech
  $('.meninasTech').on("click", function() {
    $('.somosRieText').hide();
    $('.cookrAppText').hide();
    $('.previa').hide();
    $('.meninasTechText').fadeIn('slow');

    });

//Skills
    $('.skills').on("mouseenter", function() {
      $('.aboutMeText').hide();
      $('.resumeText').hide();
      $('.projectsText').hide();
      $('.previa').hide();
      $('.right').css({ backgroundImage: backgroundImageBlur});
      $('.skillsText').fadeIn("slow");
    });

//Projects
  $('.projects').on('mouseenter', function(){
    $('.aboutMeText').hide();
    $('.skillsText').hide();
    $('.somosRieText').hide();
    $('.cookrAppText').hide();
    $('.meninasTechText').hide();
    $('.resumeText').hide();
    $('.previa').show();
    $('.projectsText').show();
    $('.right').css( "background-image", "none");
  });

//Resume
$('.resume').on('mouseenter', function(){
  $('.aboutMeText').hide();
  $('.skillsText').hide();
  $('.previa').hide();
  $('.projectsText').hide();
  $('.right').css( "background-image", "none");
  $('.resumeText').show();
});

// Message Console
if( typeof console === 'object' ) {
    console.log(
        '\n' +
        '%c ♥ Hey you! Thanks for visiting.\n' +
        'If you wanna know a bit more about me or my portfolio just say hi!\n' +
        '\n' +
        '    _      _      _\n' +
        '  >(.)__ <(.)__ =(.)__\n' +
        '   (___/  (___/  (___/\n'+
        '\n' +
        'I’d love to hear what you think!\n' +
        '\n' +
        '— Rany \n' , 'color: #B9AEE0; font-size: medium'
    );
}


});
