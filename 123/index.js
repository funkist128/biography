$(document).ready(function(){

	if(document.getElementById("bio-btn").className !== "active") {
		$(".bio").hide();
	}
	if(document.getElementById("skill-btn").className !== "active") {
		$(".skill").hide();
	}
	$("#bio-btn").click(function(){
		$("#skill-btn").removeClass("active");
		$(".home").fadeOut();
		$("#bio-btn").addClass("active");
		$(".bio").fadeIn();
		$(".skill").hide();
	});

	$("#skill-btn").click(function(){
		$("#bio-btn").removeClass("active");
		$(".home").fadeOut();
		$("#skill-btn").addClass("active");
		$(".skill").fadeIn();
		$(".bio").hide();
	});
});