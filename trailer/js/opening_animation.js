OpeningAnimation = function( id ){
    this.Reset = function( id ){
	this.element = document.getElementById( id );
	this.ctx = this.element.getContext( '2d' );
	this.xCharNum = 16 + 2;
	this.yCharNum = 16 + 2;
	this.OnResize();
	this.ClearCanvas("black");
	
	this.fontSize = this.GetFontSize();
	this.scale = 1.0
	
	this.string  = "\nカヤック15年新卒20名は・・・\n\n"
	this.string += "数年前この20名で起業をし、\n\n"
	this.string += "会社経営をしていた\n\n"
	this.string += "\n\n"
	this.string += "だが、社内である事件が起こり\n\n"
	this.string += "会社を倒産させてしまった\n\n"
	this.string += "\n\n\n"
	this.string += "そこで、何がおきたのか・・・　　　　　　　　　　\n"
	
	this.draw_x = this.GetInitDrawX();
	this.draw_y = this.GetInitDrawY();
	this.Loop( 0, 0 )
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
    }
    
    this.Loop = function( frame, time ){
	var that = this;
	that.ctx.font = "bold #fontSizepx 'メイリオ'".replace("#fontSize",that.fontSize);
	
	var ch = ""
	if( frame < that.string.length ){
	    ch = that.string[ frame ]
	}
	
	if(ch != ""){
	    that.ctx.shadowBlur = this.fontSize / 2;
	    that.ctx.shadowColor = "gray";
	    that.ctx.fillStyle = "red";
	    that.ctx.fillText( that.string[ frame ], that.draw_x - 4, that.draw_y );
	    that.ctx.fillStyle = "cyan";
	    that.ctx.fillText( that.string[ frame ], that.draw_x + 4, that.draw_y );	
	    that.ctx.fillStyle = "white";
	    that.ctx.fillText( that.string[ frame ], that.draw_x, that.draw_y );
	    
	    that.draw_y += this.fontSize;
	    if( ch == "\n" ){
		that.draw_x -= this.fontSize;
		that.draw_y = this.GetInitDrawY();
	    }
	    nextFrame = frame + 1
	    nextTime = time + 1
	    setTimeout( function(){ that.Loop( nextFrame, nextTime ) }, 100 );
	}
	if( ch == "" ){
	    return that.Loop2( 0, 0 );
	}
	    
    }
    this.Loop2 = function( frame, time ){
	if( frame == 0 ){
	    this.a = new StringObject(this.ctx, "４", 400 , 200, 100 ) 
	    this.b = new StringObject(this.ctx, "月", 500 , 200, 100 ) 
	    this.c = new StringObject(this.ctx, "１", 600 , 200, 100 )
	    this.d = new StringObject(this.ctx, "７", 700 , 200, 100 ) 	    
	    this.e = new StringObject(this.ctx, "日", 800 , 200, 100 )
	}
	var that = this;
	this.ClearCanvas();
	this.f = new StringObject(this.ctx, "すべての真相は、", 200 , 200, 100 )
	this.a.Draw()
	this.b.Draw()
	this.c.Draw()
	this.d.Draw()
	this.e.Draw()
	if(frame < 500)
	    setTimeout( function(){ that.Loop2( frame+1, 0 ) }, 20 );
    }

    this.Reset( id )
}


StringObject = function( ctx, text, x, y, fontSize ){
    this.Reset = function( ctx,text, x, y, fontSize ){
	this.text = text;
	this.animationFlag = true;
	this.screen_x = x
	this.screen_y = y
	this.frame = 0
	this.ctx = ctx
	this.initFontSize = 3000;
	this.fontSize = 100;
	this.drawFrag = false
    }
    this.Draw = function( ){
	draw_x = this.screen_x;
	draw_y = this.screen_y;
	this.frame += 1;

	var process = this.frame * 2;
	fontSize = this.CalcSize( process );
	this.ctx.fillStyle = "white";
	this.ctx.font = "bold #fontSizepx 'arial'".replace( "#fontSize", fontSize );
	for( var i = 0; i < this.text.length; i++ ){
	    this.ctx.fillText( this.text[ i ], draw_x, draw_y );
	    draw_x += this.fontSize;
	}
    }
    this.CalcSize = function( process ){
	if( process >= 100 ) process = 100;
	var theta = Math.PI * process * 1.0 / 100;
	var value = ( 1 + Math.cos( theta ) ) * 1.0 / 2 * ( this.initFontSize - this.fontSize ) + this.fontSize;
	return value;
    }
    this.Reset( ctx, text, x, y, fontSize )
}
