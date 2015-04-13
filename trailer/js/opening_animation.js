OpeningAnimation = function( id ){
    this.Reset = function( id ){
	this.element = document.getElementById( id );
	this.ctx = this.element.getContext( '2d' );
	this.xCharNum = 16 + 2;
	this.yCharNum = 16 + 2;
	this.OnResize();


	this.loadNum = 0

	
	this.fontSize = this.GetFontSize();
	
	this.string  = "\nカヤック１年新卒２名は・・・\n\n"
	this.string += "数年前この２名で起業をし、\n\n"
	this.string += "会社経営をしていた\n\n"
	this.string += "\n\n"
	this.string += "だが、社内である事件が起こり\n\n"
	this.string += "会社を倒産させてしまった\n\n"
	this.string += "\n\n\n"
	this.string += "そこで、何がおきたのか・・・　　　　　　　　　　\n"

	this.imageAry = []
	
	this.draw_x = this.GetInitDrawX();
	this.draw_y = this.GetInitDrawY();

	this.backImage = new Image()
	this.backImage.src = "image/back.png"
	var that = this
	this.backImage.onload = function(){
	    that.LoadImage(75)
	    that.ClearCanvas("black");
	}
    }
    this.GetFontSize = function(){
	x_fontSize = Math.floor( ( this.element.height ) / ( this.xCharNum ) );
	y_fontSize = Math.floor( ( this.element.width  ) / ( this.yCharNum ) );
	if( x_fontSize < y_fontSize ){
	    console.log("x")
	    return x_fontSize;
	}else{
	    console.log("y")
	    return y_fontSize;
	}
    }
    this.GetInitDrawX = function(){
	console.log( this.fontSize * this.xCharNum )
	var i = this.element.width - ( this.element.width - ( this.fontSize * this.xCharNum  ) ) / 2  - this.fontSize;
	console.log(i)
	return i
    }
    this.GetInitDrawY = function(){
	return ( this.element.height - this.yCharNum * this.fontSize ) / 2 + this.fontSize * 2;
    }
    this.OnResize = function(){
	this.element.width  =  window.innerWidth;
	this.element.height = window.innerHeight;
    }

    this.ClearCanvas = function( color ){
	this.ctx.fillStyle = color;
	var w = this.element.width;
	var h = this.element.height;

	var grad5 = this.ctx.createRadialGradient( w/2, h/2, w/6, w/2, h/2, w/2 );
	grad5.addColorStop(0,'#000000');
	grad5.addColorStop(1.0,'#222222');

	this.ctx.beginPath();
	this.ctx.fillStyle = grad5;
	this.ctx.fill();
	this.ctx.fillRect( 0, 0, this.element.width, this.element.height );
	this.ctx.drawImage( this.backImage, 0, 0, this.element.width, this.element.height );	
    }
    
    this.Loop = function( frame, time ){
	var that = this;
	
	var ch = ""
	if( frame < that.string.length ){
	    ch = that.string[ frame ]
	}

	if( time == that.imageAry.length ){
	    return console.log("next");
	}
	
	if( ch != "\n" ){
	    that.ctx.drawImage( that.imageAry[ time++ ], that.draw_x, that.draw_y, that.fontSize, that.fontSize );
	    that.draw_y += that.fontSize;
	}else{
	    that.draw_x -= that.fontSize;
	    that.draw_y = that.GetInitDrawY();
	}
	setTimeout( function(){ that.Loop( frame + 1, time ) }, 100 );
    }    
    this.LoadImage = function( imageNum ){
	var imageAry = [];
	var loadNum = 0;
	var that = this
	
	for( i = 0; i < imageNum; i++ ){
	    var src = "image/" + ( "00" + ( i + 1 ) ).slice( -2 ) + ".png"
	    var image = new Image();
	    image.src = src;
	    image.onload = function(){ that.loadNum += 1 }
	    this.imageAry.push( image );
	}
	this.LoadImageCheck();
    }
    this.LoadImageCheck = function(){
	var that = this
	if( that.loadNum == this.imageAry.length ){
	    return this.Loop( 0, 0 )
	}
	setTimeout( function(){ that.LoadImageCheck() }, 100 );	
    }
    
    this.Reset( id )
}


