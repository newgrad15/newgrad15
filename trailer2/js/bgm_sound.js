BgmSound = function( id ){
  this.Reset = function( id ){
      this.playFlag = true;
      this.element = document.getElementById( id );
      this.element.playbackRate = 1;
      this.element.volume = 1;
      if( this.playFlag ){
	  this.Play();
      }
      
  }
    this.Toggle = function(){
	this.playFlag = !this.playFlag;
	if( this.playFlag == true ){
	    this.Play();
	}else{
	    this.Pause();
	}
    }
    this.Play = function(){
	this.element.play();
    }
    this.Pause = function(){
	this.element.pause();
    }
    this.Reset( id );
}
