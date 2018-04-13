
// the requested meetings interaction
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {});

// the initialization of all of the students' data
let students = [
  {
    name: "Grace",
    comment: "I had a good ride to school",
    alert: false,
    mood: ["\uD83D\uDE33", "Lonely"]
  },
  {
    name: "Tom",
    comment: "That was some excellent breakfast!",
    alert: false,
    mood: ["\uD83D\uDE4F", "Grateful"]
  },
  {
    name: "Lizzie",
    comment: "I woke up feeling great",
    alert: false,
    mood: ["\uD83E\uDD29", "Curious"]
  },
  {
    name: "Jane",
    comment: "No comment today",
    alert: false,
    mood: ["\uD83D\uDE21", "Furious"]
  },
  {
    name: "Andrew",
    comment: "My tummy don't feel so good",
    alert: false,
    mood: ["\uD83D\uDE33", "Lonely"]
  },
  {
    name: "Julius",
    comment: "Woweee Jane is pretty",
    alert: false,
    mood: ["\uD83E\uDD29", "Curious"]
  },
  {
    name: "Helen",
    comment: "I is kind, I is smart, I is important",
    alert: false,
    mood: ["\uD83D\uDE21", "Furious"]
  },
  {
    name: "Julie",
    comment: "John was talking to Michaela which is not fair because she doesn't sit still",
    alert: false,
    mood: ["\uD83D\uDE33", "Lonely"]
  },
  {
    name: "Jackson",
    comment: "My dad is a rocket scientist",
    alert: false,
    mood: ["\uD83D\uDE4F", "Grateful"]
  },
  {
    name: "Michaela",
    comment: "Ooh I like Math",
    alert: true,
    mood: ["\uD83E\uDD29", "Curious"]
  },
  {
    name: "John",
    comment: "John, John Travolta hahaha",
    alert: false,
    mood: ["\uD83D\uDE21", "Furious"]
  },
  {
    name: "Ashley",
    comment: "These are my thoughts",
    alert: false,
    mood: ["", "Invisible"]
  },
  {
    name: "Jen",
    comment: "That is the way it goes",
    alert: false,
    mood: ["\uD83D\uDE21", "Furious"]
  },
  {
    name: "Jacob",
    comment: "Esau was being mean today",
    alert: true,
    mood: ["\uD83D\uDE33", "Lonely"]
  },
  {
    name: "Patricia",
    comment: "Could be the day",
    alert: false,
    mood: ["\uD83E\uDD14", "Focused"]
  },
  {
    name: "Ben",
    comment: "I am a rock",
    alert: false,
    mood: ["\uD83D\uDE4F", "Grateful"]
  },
  {
    name: "Alex",
    comment: "I love soccer",
    alert: true,
    mood: ["\uD83D\uDE33", "Lonely"]
  },
  {
    name: "Alice",
    comment: "Yesterday was a long day",
    alert: false,
    mood: ["\uD83E\uDD29", "Curious"]
  },
  {
    name: "Kevin",
    comment: "I need some space",
    alert: false,
    mood: ["\uD83D\uDE33", "Lonely"]
  },
  {
    name: "Rob",
    comment: "Wonderful and epic today",
    alert: false,
    mood: ["", "Invisible"]
  }
]

//  inserting the html that displays the grid view of the students
function renderStudents(studs) {
  return `<div class="flex-grid-thirds">
  <div class="col grid-element ${studs[0].mood[1]}"><a href="teacher_profile.html">${studs[0].name}</a></div>
  <div class="col grid-element ${studs[1].mood[1]}"><a href="teacher_profile.html">${studs[1].name}</a></div>
  <div class="col grid-element ${studs[2].mood[1]}"><a href="teacher_profile.html">${studs[2].name}</a></div>
  <div class="col grid-element ${studs[3].mood[1]}"><a href="teacher_profile.html">${studs[3].name}</a></div>
  <div class="col grid-element ${studs[4].mood[1]}"><a href="teacher_profile.html">${studs[4].name}</a></div>
</div>
<div class="flex-grid-thirds">
<div class="col grid-element ${studs[5].mood[1]}"><a href="teacher_profile.html">${studs[5].name}</a></div>
<div class="col grid-element ${studs[6].mood[1]}"><a href="teacher_profile.html">${studs[6].name}</a></div>
<div class="col grid-element ${studs[7].mood[1]}"><a href="teacher_profile.html">${studs[7].name}</a></div>
<div class="col grid-element ${studs[8].mood[1]}"><a href="teacher_profile.html">${studs[8].name}</a></div>
<div class="col grid-element ${studs[9].mood[1]}"><a href="teacher_profile.html">${studs[9].name}</a></div>
</div>
<div class="flex-grid-thirds">
<div class="col grid-element ${studs[10].mood[1]}"><a href="teacher_profile.html">${studs[10].name}</a></div>
<div class="col grid-element ${studs[11].mood[1]}"><a href="teacher_profile.html">${studs[11].name}</a></div>
<div class="col grid-element ${studs[12].mood[1]}"><a href="teacher_profile.html">${studs[12].name}</a></div>
<div class="col grid-element ${studs[13].mood[1]}"><a href="teacher_profile.html">${studs[13].name}</a></div>
<div class="col grid-element ${studs[14].mood[1]}"><a href="teacher_profile.html">${studs[14].name}</a></div>
</div>
<div class="flex-grid-thirds">
<div class="col grid-element ${studs[15].mood[1]}"><a href="teacher_profile.html">${studs[15].name}</a></div>
<div class="col grid-element ${studs[16].mood[1]}"><a href="teacher_profile.html">${studs[16].name}</a></div>
<div class="col grid-element ${studs[17].mood[1]}"><a href="teacher_profile.html">${studs[17].name}</a></div>
<div class="col grid-element ${studs[18].mood[1]}"><a href="teacher_profile.html">${studs[18].name}</a></div>
<div class="col grid-element ${studs[19].mood[1]}"><a href="teacher_profile.html">${studs[19].name}</a></div>
</div>`
}

// renders the classroom
function renderClass(classview) {
  let classElm = document.querySelector('.classroom');
  classElm.innerHTML = renderStudents(classview);
  // record which student is clicked
  let squares = document.querySelectorAll(".flex-grid-thirds .grid-element");
  squares.forEach(el => el.addEventListener('click', function(a) {localStorage.setItem('current', JSON.stringify(students.find(e => a.target.text == e.name)))}));
}
// 
// renders list of requested meetings
function insertAlert() {
  return `<a class="waves-effect" href="#!">Jen</a>`
}

function renderAlert(prof) {
  alertbool = prof.alert;
  if (alertbool) {
    let alertElm = document.querySelector('#inserthere');
    alertElm.innerHTML = insertAlert();
  }
}

// changes the student called Jen's data based on the input from the student UI
function editJen() {
  let currentJen = students[12];
  let storedJen = localStorage.getItem('students');
  console.log(storedJen);
  if (storedJen.mood != null) {
    currentJen = JSON.parse(storedJen); 
    students[12].comment = currentJen.comment;
    students[12].alert = currentJen.alert;
    console.log(students[12].mood)
    students[12].mood = currentJen.mood;
    renderAlert(currentJen)
  }
}
editJen();
renderClass(students);

