let students = []

let student = 	{
	name: "Jane",
	comment: "",
	alert: false,
	// visible: false,
	mood: []
}

function reason() {
	console.log("reason button clicked student's reason is stored");
	student.comment = document.getElementById("reason").value;
	console.log(student.comment);
}

function toggle() {
	var mood = student.mood 
	if (document.getElementById("check").checked) {
		// student.visible = true;
		student.mood = mood;
		console.log(student.mood);
	}
	else {
		console.log("unchecked")
		student.mood = ["invisible"];
	}
}

$(document).ready(function() {
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
		if (document.getElementById("jameson").checked) {
			student.alert = true;
		}
		else{
			student.alert = false;
		}
		console.log("Teacher has been notified");
		
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	var present = document.getElementById("present");
	present.onclick = function() {
		student.mood = [present.textContent];
		console.log("present clicked");
	}
	var focused = document.getElementById("focused");
	focused.onclick = function() {
		student.mood = [focused.textContent];
		console.log("focused clicked")
	}
	var curious = document.getElementById("curious");
	curious.onclick = function() {
		student.mood = [curious.textContent];
	}
	var lonely = document.getElementById("lonely");
	lonely.onclick = function() {
		student.mood = [lonely.textContent];
	}
	var hopeless = document.getElementById("hopeless");
	hopeless.onclick = function() {
		student.mood = [hopeless.textContent];
	}
	var grief = document.getElementById("grief");
	grief.onclick = function() {
		student.mood = [grief.textContent];
	}
	var carefree = document.getElementById("carefree");
	carefree.onclick = function() {
		student.mood = [carefree.textContent];
	}
	var grateful = document.getElementById("grateful");
	grateful.onclick = function() {
		student.mood = [grateful.textContent];
	}
	var excited = document.getElementById("excited");
	excited.onclick = function() {
		student.mood = [excited.textContent];
	}
	var stressed = document.getElementById("stressed");
	stressed.onclick = function() {
		student.mood = [stressed.textContent];
	}
	var frustrated = document.getElementById("frustrated");
	frustrated.onclick = function() {
		student.mood = [frustrated.textContent];
	}
	var furious = document.getElementById("furious");
	furious.onclick = function() {
		student.mood = [furious.textContent];
	}

	students.push(student)

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
});

localStorage.setItem("students", JSON.stringify(students));