var gShowClass = ".jigyoubu_content.nijigen_ijyuu"
window.onload = function(){
    $(".jigyoubu_list.nijigen_ijyuu").click(function(){
	var showClass = ".jigyoubu_content.nijigen_ijyuu"
	$( gShowClass ).css("display","none");
	$( showClass ).css("display","block");
	$('html,body').animate({ scrollTop: $( showClass ).offset().top }, 'normal');
	gShowClass = showClass
    })
    
    $(".jigyoubu_list.herunia").click(function(){
	var showClass = ".jigyoubu_content.herunia"
	$( gShowClass ).css("display","none");
	$( showClass ).css("display","block");
	$('html,body').animate({ scrollTop: $( showClass ).offset().top }, 'normal');
	gShowClass = showClass
    })

    $(".jigyoubu_list.sekaino_kotowari").click(function(){
	var showClass = ".jigyoubu_content.sekaino_kotowari"
	$( gShowClass ).css("display","none");
	$( showClass ).css("display","block");
	$('html,body').animate({ scrollTop: $( showClass ).offset().top }, 'normal');
	gShowClass = showClass
    })
}
