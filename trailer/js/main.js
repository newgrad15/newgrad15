var openingAnimation

window.onload = function(){
    new TimeCounter( "time_counter", 2015, 04, 17, 10, 00, 00 );
    openingAnimation = new OpeningAnimation( "canvas" );
}
window.onresize = function(){
    openingAnimation.OnResize()
}

