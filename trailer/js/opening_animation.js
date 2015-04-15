OpeningAnimation = function( id, callBack ){
    this.Reset = function( id, callBack ){
	this.element = document.getElementById( id );
	this.ctx = this.element.getContext( '2d' );
	this.xCharNum = 18 + 2;
	this.yCharNum = 16 + 2;
	this.stringImageNum = 74;

	this.loadImageStartNum = 0;
	this.loadImageEndNum = 0;
	
	this.imagePos = 0
	this.string  = "\nカヤックX年新卒X名は・・・\n\n"
	this.string += "数年前このX名で起業をし、\n\n"
	this.string += "会社経営をしていた\n\n"
	this.string += "\n\n"
	this.string += "しかし\n\n"
	this.string += "社内である事件が起こり\n\n"
	this.string += "倒産することに\n\n"
	this.string += "\n\n"	
	this.string += "彼らの身に\n\n"
	this.string += "いったい何がおきたのか・・・\n"
	this.string += "\n\n"
	this.stringPos = 0
	this.imageAry = []
	this.LoadImage()
	this.callBack = callBack
    }
    this.GetFontSize = function(){
	x_fontSize = Math.floor( ( this.element.height ) / ( this.xCharNum ) );
	y_fontSize = Math.floor( ( this.element.width  ) / ( this.yCharNum ) );
	if( x_fontSize < y_fontSize ){
	    return x_fontSize;
	}else{
	    return y_fontSize;
	}
    }
    this.GetInitDrawX = function(){
	var i = this.element.width - ( this.element.width - ( this.fontSize * this.xCharNum  ) ) / 2  - this.fontSize;
	return i
    }
    this.GetInitDrawY = function(){
	return ( this.element.height - this.yCharNum * this.fontSize ) / 2 + this.fontSize * 2;
    }
    this.OnResize = function(){
	this.element.width  = window.innerWidth;
	this.element.height = window.innerHeight;
	this.fontSize = this.GetFontSize();
	this.draw_x = this.GetInitDrawX();
	this.draw_y = this.GetInitDrawY();
	this.ClearCanvas("black");
    }
    this.ClearCanvas = function( color ){
	this.ctx.fillStyle = color;
	this.ctx.clearRect( 0, 0, this.element.width, this.element.height );
	this.imagePos = 0
	var frame = this.stringPos
	this.stringPos = 0
	for( i = 0; i < frame; i++ ){
	    this.DrawImage( i );
	}
    }
    
    this.Loop = function(){
	var that = this;
	var endLoopCheck = function(){
	    return that.imagePos == that.imageAry.length
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
	    that.ctx.drawImage(
		that.imageAry[ imagePos ].image,
		that.draw_x,
		that.draw_y,
		that.fontSize,
		that.fontSize
	    );
	    that.draw_y += that.fontSize;
	}

	var ch = ""
	if( that.stringPos < that.string.length ){
	    ch = that.string[ that.stringPos++ ]
	}
	if( ch == "\n" ){
	    newLine()
	}
	if( ch != "\n" ){
	    drawImage()
	    this.imagePos++
	}

    }
    
    this.LoadImage = function( imageNum ){
	var imageAry = [];
	var loadNum = 0;
	var that = this

	for( i = 0; i < this.stringImageNum; i++ ){
	    that.loadImageStartNum += 1
	    var image = new Image();
	    var src = "image/" + ( "00" + ( i + 1 ) ).slice( -2 ) + ".png"
	    image.src = src;
	    image.onload = function(){
		that.loadImageEndNum += 1

	    }
	    that.imageAry.push(
		{
		    image:image,
		    drawFlag:true,
		}
	    )
	    
	}
	
	this.LoadImageCheck();
    }
    this.LoadImageCheck = function(){
	var that = this
	console.log( that.loadImageStartNum, that.loadImageEndNum )
	if( that.loadImageEndNum == that.loadImageStartNum ){
	    that.OnResize();
	    return this.Loop( 0, 0 )
	}
	setTimeout( function(){ that.LoadImageCheck() }, 100 );	
    }
    this.EndProcess = function(){
	var that = this
	setTimeout( function(){ that.callBack() }, 1000 );	
    }
    
    this.Reset( id, callBack )
}
