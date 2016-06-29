$(document).ready(function(){

	var checkVisibilty = function() {
		if(document.getElementById("bio-btn").className !== "active") {
		$(".bio").hide();
		}
		if(document.getElementById("skill-btn").className !== "active") {
			$(".skill").hide();
		}
		if(document.getElementById("contact-btn").className !== "active") {
			$(".contact").hide();
		}
	}

	checkVisibilty();
	
	$("#bio-btn").click(function(){
		$("#skill-btn").removeClass("active");
		$("#contact-btn").removeClass("active");
		$("#bio-btn").addClass("active");
		$(".home").fadeOut();
		$(".bio").fadeIn();
		checkVisibilty();
	});

	$("#skill-btn").click(function(){
		$("#bio-btn").removeClass("active");
		$("#contact-btn").removeClass("active");
		$("#skill-btn").addClass("active");
		$(".home").fadeOut();
		$(".skill").fadeIn();
		checkVisibilty();
	});

	$("#contact-btn").click(function(){
		$("#bio-btn").removeClass("active");
		$("#skill-btn").removeClass("active");
		$("#contact-btn").addClass("active");
		$(".home").fadeOut();
		$(".contact").fadeIn();
		checkVisibilty();
	});
});