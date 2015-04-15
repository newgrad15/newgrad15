var openingAnimation

window.onload = function(){
    new TimeCounter( "time_counter", 2015, 04, 17, 10, 30, 00 );
    openingAnimation = new OpeningAnimation( "opening_animation", pageOnLoad );
}
window.onresize = function(){
    openingAnimation.OnResize()
}

