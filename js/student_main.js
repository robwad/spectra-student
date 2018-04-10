$(document).ready(function() {
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var confirm = document.getElementsByClassName("confirm")[0];

	var cancel =  document.getElementsByClassName("cancel")[0];
	console.log(confirm,cancel)
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	cancel.onclick = function() {
	    modal.style.display = "none";
	}

	// let today = {
	// 	mood: null;
	// 	text: null;
	// 	privacy: {

	// 	};
	// 	alert: {

	// 	};
	// }
	confirm.onclick = function() {
		modal.style.display = "none";
		// localStorage.setItem("key", JSON.stringify(student));
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	var reason = document.getElementById("submit_reason");
	reason.onclick = function() {
		// today.mood = 
		today.text = document.getElementById("reason").value;
		// localStorage.setItem("state",JSON.stringify(days))
	}




	$(".link").fastClick(function () {
		screen = "#" + $(this).attr("page-load");
		if($(this).hasClass("none")){
			$(".sc").removeClass("selected");
			$(screen).addClass("selected");
		}
		if($(this).hasClass("slideleft")){
			$(".selected").addClass("previous");
			$(screen).css({x:$(window).width() + "px"}).addClass("selected");
			$(".previous").transition({x:"-" + $(window).width() + "px"},300,"ease");
			$(screen).transition({x:"0px"},300,"ease",function () {
				$(".previous").removeClass("selected");
				$(".previous").removeClass("previous");
				$(".sc").removeAttr("style");
			});	
		}
		if($(this).hasClass("slideright")){
			$(".selected").addClass("previous");
			$(screen).css({x:"-" + $(window).width() + "px"}).addClass("selected");
			$(".previous").transition({x:$(window).width() + "px"},300,"ease");
			$(screen).transition({x:"0px"},300,"ease",function () {
				$(".previous").removeClass("selected");
				$(".previous").removeClass("previous");
				$(".sc").removeAttr("style");
			});		
		}
	})
})