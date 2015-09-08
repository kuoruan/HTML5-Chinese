$(document).ready(function(){
    $("#navsecond").css("height",$(window).height()-150);
	$("#maincontent").css("height",$(window).height()-150);
	$("#navsecond").scrollTop($("#navsecond .acv")[0].offsetTop-50); 
});