let students = []

let student = 	{
	name: "Jane",
	comment: "",
	alert: false,
	visible: false,
	mood: []
}

function reason() {
<<<<<<< HEAD
	console.log("reason clicked");
=======
	console.log("reason button clicked - student's reason is stored");
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
	student.comment = document.getElementById("reason").value;
	console.log(student.comment);
}

function toggle() {
	if (document.getElementById("check").checked) {
		student.visible = true;
<<<<<<< HEAD
		console.log("checked");
=======
		console.log("checkbox is checked");
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
		console.log(student.visible);
	}
	else {
		student.visible = false;
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
		console.log("well done");
		student.alert = true;
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	// function reason() {
	// 	console.log("reason clicked");
	// 	student.comment = document.getElementById("reason").value;
	// }

<<<<<<< HEAD
	function present() {
		student.mood = [present];
		console.log("present clicked");
	}
	var present = document.getElementById("present");
	present.onclick = function() {
		student.mood = [present];
		console.log("present clicked");
=======
	// function present() {
	// 	student.mood = [present];
	// 	console.log("present clicked");
	// }
	var present = document.getElementById("present");
	present.onclick = function() {
		student.mood = [present.textContent];
		console.log("present clicked");
		console.log(student.mood);
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
	}
	var focused = document.getElementById("focused");
	focused.onclick = function() {
		student.mood = [focused];
<<<<<<< HEAD
=======
		console.log("focused clicked")
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
	}
	var curious = document.getElementById("curious");
	curious.onclick = function() {
		student.mood = [curious];
	}
	var lonely = document.getElementById("lonely");
	lonely.onclick = function() {
		student.mood = [lonely];
	}
	var hopeless = document.getElementById("hopeless");
	hopeless.onclick = function() {
		student.mood = [hopeless];
	}
	var grief = document.getElementById("grief");
	grief.onclick = function() {
		student.mood = [grief];
	}
	var carefree = document.getElementById("carefree");
	carefree.onclick = function() {
		student.mood = [carefree];
	}
	var grateful = document.getElementById("grateful");
	grateful.onclick = function() {
		student.mood = [grateful];
	}
	var excited = document.getElementById("excited");
	excited.onclick = function() {
		student.mood = [excited];
	}
	var stressed = document.getElementById("stressed");
	stressed.onclick = function() {
		student.mood = [stressed];
	}
	var frustrated = document.getElementById("frustrated");
	frustrated.onclick = function() {
		student.mood = [frustrated];
	}
	var furious = document.getElementById("furious");
	furious.onclick = function() {
		student.mood = [furious];
	}

<<<<<<< HEAD
	function toggle() {
		if (document.getElementById("check").checked) {
			student.visible = true;
			console.log("checked")
		}
		else {
			student.visible = false;
		}
	}
=======
	// function toggle() {
	// 	if (document.getElementById("check").checked) {
	// 		student.visible = true;
	// 		console.log("checked")
	// 	}
	// 	else {
	// 		student.visible = false;
	// 	}
	// }
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
	// add the updated student to the students list
	students.push(student)

	// console.log(students)
	// console.log(student)

<<<<<<< HEAD
	localStorage.setItem("students", JSON.stringify(students));
=======
	// localStorage.setItem("students", JSON.stringify(students));
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f

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

function reason() {
	console.log("reason clicked");
	student.comment = document.getElementById("reason").value;
	console.log(student.comment);
}

function toggle() {
	if (document.getElementById("check").checked) {
<<<<<<< HEAD
		student.visible = true;
=======
		student.mood = [invisible]
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
		console.log("checked");
		console.log(student.visible);
	}
	else {
		student.visible = false;
	}
}

<<<<<<< HEAD
=======
console.log(student)
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
// var present = document.getElementById("present");
// present.onclick = function() {
// 	student.mood = [present];
// 	console.log("present clicked");
// }

// var present = document.getElementsByClassName("present")[0];
// present.onclick = function() {
// 	student.mood = [present];
// 	console.log("present clicked");
// }

localStorage.setItem("students", JSON.stringify(students));
<<<<<<< HEAD
=======
console.log(student)
>>>>>>> b84129c11fb43c9499625dca1e676a0671bfd16f
