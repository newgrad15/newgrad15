// var openingAnimation

window.onload = function(){
  new TimeCounter( "time_counter", 2015, 04, 17, 10, 30, 00 );
  openingAnimation = new OpeningAnimation( "opening_animation", pageOnLoad );
}
window.onresize = function(){
  openingAnimation.OnResize()
}

var bgmSound, soundON=true;

$(function(){
  //pageOnLoad();
  
  $("#sound").click(function(){
    bgmSound.Toggle();
    
    if (soundON) {
      $(this).css("background-image","url(./image/sound_off.png)");
      soundON=false;
    }else{
      $(this).css("background-image","url(./image/sound_on.png)");
      soundON=true;
    }
  });
  $("li.top").click(function(){ navigation(this); });
  $("li.story").click(function(){ navigation(this); });
  $("li.cast").click(function(){ navigation(this); });
  $("li.theaters").click(function(){ navigation(this); });
});
function navigation(obj){
    item = $( "div.content#"+$(obj).attr("class") );
  $("#contents div.content").fadeOut(1000, function(){
    setTimeout(function(){
      $( item ).fadeIn(2000);
    }, 1000);
  });
}
function pageOnLoad(){
  $("#opening").fadeOut(2000);
  $("#container").fadeIn(3000);
  bgmSound = new BgmSound( "audio" );
  fadeImage();
}
var fadeTime=800,
    fadeSpan=10000,
    n=0;
function fadeImage(){
  var len = 2;
  
  // console.log(n);
  if(n >= len){ n=0; }
  
  $("#bgimg").animate({'opacity' : '0'}, fadeTime, function(){
    $(this).css("background-image","url(./image/rouka_"+(n+1)+".png)").animate({'opacity' : '1'}, fadeTime);
    n++;
  });
  
  setTimeout(fadeImage, fadeSpan);
}
