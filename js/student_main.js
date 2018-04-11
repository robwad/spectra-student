$(document).ready(function() {
	let students = []

	let student = 	{
		name: Jane,
		comment: "",
		alert: false,
		visible: false,
		mood: []
	}

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var confirm = document.getElementsByClassName("confirm")[0];

	var cancel =  document.getElementsByClassName("cancel")[0];
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	cancel.onclick = function() {
	    modal.style.display = "none";
	}

	confirm.onclick = function() {
		modal.style.display = "none";
		student.alert = true;
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	var reason = document.getElementById("submit_reason");

	reason.onclick = function() {
		student.comment = document.getElementById("reason").value;
	}

	var present = document.getElementById("present");
	present.onclick = function() {
		student.mood = [&#x1f60c, present];
	}
	var focused = document.getElementById("focused");
	focused.onclick = function() {
		student.mood = [&#x1F914, focused];
	}
	var curious = document.getElementById("curious");
	curious.onclick = function() {
		student.mood = [&#x1F913, curious];
	}
	var lonely = document.getElementById("lonely");
	lonely.onclick = function() {
		student.mood = [&#x1f633, lonely];
	}
	var hopeless = document.getElementById("hopeless");
	hopeless.onclick = function() {
		student.mood = [&#x1f625, hopeless];
	}
	var grief = document.getElementById("grief");
	grief.onclick = function() {
		student.mood = [&#x1f62d, grief];
	}
	var carefree = document.getElementById("carefree");
	carefree.onclick = function() {
		student.mood = [&#x1f600, carefree];
	}
	var grateful = document.getElementById("grateful");
	grateful.onclick = function() {
		student.mood = [&#x1f64f, grateful];
	}
	var excited = document.getElementById("excited");
	excited.onclick = function() {
		student.mood = [&#x1f604, excited];
	}
	var stressed = document.getElementById("stressed");
	stressed.onclick = function() {
		student.mood = [&#x1f630, stressed];
	}
	var frustrated = document.getElementById("frustrated");
	frustrated.onclick = function() {
		student.mood = [&#x1f624, frustrated];
	}
	var furious = document.getElementById("furious");
	furious.onclick = function() {
		student.mood = [&#x1f621, furious];
	}

	// add the updated student to the students list
	students.append(student)

	localStorage.setItem("students", JSON.stringify(students));

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