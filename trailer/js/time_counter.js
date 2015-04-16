// window.onload = function(){
// 	new TimeCounter( "counter", 2015, 04, 17, 10, 00, 00 );
//     new OpeningAnimation( "canvas" );
// }

TimeCounter = function( id, year, month, date, hours, minutes, seconds ){
    this.Reset = function( id, year, month, date, hours, minutes, seconds ){
	this.limitDate = new Date()
	this.limitDate.setYear( year )
	this.limitDate.setMonth( month - 1 )	
	this.limitDate.setDate( date )
	this.limitDate.setHours( hours )
	this.limitDate.setMinutes( minutes )
	this.limitDate.setSeconds( seconds )	
	this.element = document.getElementById( id )
	this.Loop();
    }
    this.Loop = function(){
	var that = this;
	nowDate = new Date();
	var diff = ( that.limitDate.getTime() - nowDate.getTime() ) / 1000;
	if( diff > 0 ){
	    diffDays = Math.floor( diff / 24 / 60 / 60 )
	    diff -= diffDays * 24 * 60 * 60
	    diffHours = Math.floor( diff / 60 / 60 );
	    diff -= diffHours * 60 * 60
	    diffMinutes = Math.floor( diff / 60 );
	    diff -= diffMinutes * 60
	    diffSeconds = Math.floor( diff );

	    diffDaysStr = ("00" + diffDays).slice(-2)
	    diffHoursStr = ("00" + diffHours).slice(-2)
	    diffMinutesStr = ("00" + diffMinutes).slice(-2)
	    diffSecondsStr = ("00" + diffSeconds).slice(-2)

	    // that.element.innerHTML = diffDaysStr + "日" + diffHoursStr + "時間" + diffMinutesStr + "分" + diffSecondsStr + "秒";
	    that.element.innerHTML = diffHoursStr + "時間" + diffMinutesStr + "分" + diffSecondsStr + "秒";
	}else{
	    that.element.innerHTML = "00日00時00分00秒";
	}
	setTimeout( function(){ that.Loop() }, 1000 );
    }
    this.Reset( id, year, month, date, hours, minutes, seconds );
}

