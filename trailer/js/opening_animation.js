OpeningAnimation = function( id, callBack ){
    this.Reset = function( id, callBack ){
	this.element = document.getElementById( id );
	this.element = document.getElementById( "opening_animation")
	this.xCharNum = 20 + 2;
	this.yCharNum = 16 + 2;
	this.stringImageNum = 74;

	this.loadImageStartNum = 0;
	this.loadImageEndNum = 0;
	
	this.imagePos = 0
	this.string  = "\nカヤックX年新卒X名は・・・\n\n"
	this.string += "数年前このX名で起業をし、\n\n"
	this.string += "会社経営をしていた\n\n"
	this.string += "\n\n"
	this.string += "しかし______\n\n"
	this.string += "社内である事件が起こり\n\n"
	this.string += "倒産することに\n\n"
	this.string += "\n\n"	
	this.string += "彼らの身に\n\n"
	this.string += "いったい何がおきたのか・・・\n"
	this.string += "\n\n"
	this.stringPos = 0
	this.OnResize();
	this.callBack = callBack
	return this.Loop( 0, 0 )	
    }
    this.GetFontSize = function(){
	x_fontSize = Math.floor( ( this.width ) / ( this.xCharNum ) );
	y_fontSize = Math.floor( ( this.height  ) / ( this.yCharNum ) );
	if( x_fontSize < y_fontSize ){
	    return x_fontSize;
	}else{
	    return y_fontSize;
	}
    }
    this.GetInitDrawX = function(){
	var i = this.width - ( this.width - ( this.fontSize * this.xCharNum  ) ) / 2  - this.fontSize;
	return i
    }
    this.GetInitDrawY = function(){
	return ( this.height - this.yCharNum * this.fontSize ) / 2 + this.fontSize * 2;
    }
    this.OnResize = function(){
	this.width  = window.innerWidth;
	this.height = window.innerHeight;
	this.fontSize = this.GetFontSize();
	this.draw_x = this.GetInitDrawX();
	this.draw_y = this.GetInitDrawY();
	console.log( this.element )
	for( i = 0; i < this.stringImageNum; i++ ){

	    img = $("#main img");
	    len = $(img).length;
	    $(img).eq(n).fadeIn(fadeTime);
	    
	    var target = this.element.childNodes[ i ]
	    console.log( this.element.childNodes[ i ] )
	    target.style.width = "" + this.fontSize + "px";
	    target.style.height = "" + this.fontSize + "px";	    
	}
	this.ClearCanvas()
    }
    
    this.ClearCanvas = function(){
	this.imagePos = 0
	var frame = this.stringPos
	this.stringPos = 0
	for( i = 0; i < frame; i++ ){
	    this.DrawImage();
	}
    }

    this.Loop = function(){
	var that = this;
	var endLoopCheck = function(){
	    return that.imagePos == that.stringImageNum;
	}
	that.DrawImage();
	if( endLoopCheck() ){
	    return that.EndProcess()
	}
	setTimeout( function(){ that.Loop() }, 100 );
    }

    this.DrawImage = function(){
	var that = this
	var imagePos = this.imagePos
	var newLine = function(){
	    that.draw_x -= that.fontSize;
	    that.draw_y = that.GetInitDrawY();
	}
	var drawImage = function(){
	    var target = that.element.childNodes[ that.imagePos ]
	    target.style.display = "block";
	    target.style.left = "" + that.draw_x + "px";
	    target.style.top = "" + that.draw_y + "px";
	    that.draw_y += that.fontSize;
	}

	var ch = ""
	if( that.stringPos < that.string.length ){
	    ch = that.string[ that.stringPos++ ]
	}
	if( ch == "\n" ){
	    newLine()
	}
	if( ch != "\n" && ch != "_" ){
	    drawImage()
	    this.imagePos++
	}
    }
    
    this.EndProcess = function(){
	var that = this
	setTimeout( function(){ that.callBack() }, 1000 );	
    }
    
    this.Reset( id, callBack )
}
