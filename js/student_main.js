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
	students.push(student)
	localStorage.setItem("students", JSON.stringify(students));
	console.log(student.comment);
}

function toggle() {
	var mood = student.mood 
	if (document.getElementById("check").checked) {
		console.log("checked");
	}
	else {
		console.log("unchecked")
		student.mood = ["invisible"];
		students.push(student)
		localStorage.setItem("students", JSON.stringify(students));
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
			students.push(student)
			localStorage.setItem("students", JSON.stringify(students));
		}
		else{
			student.alert = false;
			students.push(student)
			localStorage.setItem("students", JSON.stringify(students));
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
		student.mood = ["\uD83D\uDE0C","present"];
		students.push(student)
		localStorage.setItem("students", JSON.stringify(students));
		console.log("present clicked");

	}
	var focused = document.getElementById("focused");
	focused.onclick = function() {
		student.mood = ["\uD83E\uDD14","focused"];
		console.log("focused clicked");
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var curious = document.getElementById("curious");
	curious.onclick = function() {
		student.mood = ["\uD83E\uDD29", "curious"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var lonely = document.getElementById("lonely");
	lonely.onclick = function() {
		student.mood = ["\uD83D\uDE33", "lonely"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var hopeless = document.getElementById("hopeless");
	hopeless.onclick = function() {
		student.mood = ["\uD83D\uDE25", "hopeless"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var grief = document.getElementById("grief");
	grief.onclick = function() {
		student.mood = ["\uD83D\uDE2D", "grief"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var carefree = document.getElementById("carefree");
	carefree.onclick = function() {
		student.mood = ["\uD83D\uDE00", "carefree"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var grateful = document.getElementById("grateful");
	grateful.onclick = function() {
		student.mood = ["\uD83D\uDE4F", "grateful"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var excited = document.getElementById("excited");
	excited.onclick = function() {
		student.mood = ["\uD83D\uDE04", "excited"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var stressed = document.getElementById("stressed");
	stressed.onclick = function() {
		student.mood = ["\uD83D\uDE30", "stressed"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var frustrated = document.getElementById("frustrated");
	frustrated.onclick = function() {
		student.mood = ["\uD83D\uDE24", "frustrated"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
	}
	var furious = document.getElementById("furious");
	furious.onclick = function() {
		student.mood = ["\uD83D\uDE21", "furious"];
		students.push(student);
		localStorage.setItem("students", JSON.stringify(students));
		
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
students.push(student)
localStorage.setItem("students", JSON.stringify(students));