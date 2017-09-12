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


// Say HELLO
  var text = ["Manda um oi", "Di Hola", "Dit Salut", "Saluta", "Namaste", "Say Hello"];
  var counter = 0;
  var elem = document.getElementById("textChange");
  setInterval(change, 2000);
  function change() {
    elem.innerHTML = "<h1>" + text[counter] + "</h1>";
     counter++;
     if(counter >= text.length) { counter = 0; }
   }

var backgroundImageBlur = "url(CSS/images/mainbur.jpg)";
var backgroundImageNormal = "url(CSS/images/main.jpg)";


$(document).ready(function(){
    $(".rightText").each(function(){
       $(this).addClass('hidden');
  });

  $('.left-text-links').on( "click", function(e) {
      var id = $(this).attr('data-type');
      if (id === 'resume'){
        return;
      }else{
              e.preventDefault();

        $(".rightText").each(function(){
            $(this).addClass('hidden');
            if($(this).attr('id') == id) {
                $(this).removeClass('hidden');
            }
        });
      }
  });
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
