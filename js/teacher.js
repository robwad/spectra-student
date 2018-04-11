
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {});

let students = [
  {
    name: "Grace",
    comment: "I had a good ride to school",
    alert: false,
    mood: [1, "lonely"]
  },
  {
    name: "Tom",
    comment: null,
    alert: false,
    mood: [1, "grateful"]
  },
  {
    name: "Lizzie",
    comment: null,
    alert: false,
    mood: [1, "curious"]
  },
  {
    name: "Jane",
    comment: null,
    alert: false,
    mood: [1, "furious"]
  },
  {
    name: "Andrew",
    comment: null,
    alert: false,
    mood: [1, "lonely"]
  },
  {
    name: "Julius",
    comment: null,
    alert: false,
    mood: [1, "curious"]
  },
  {
    name: "Helen",
    comment: null,
    alert: false,
    mood: [1, "furious"]
  },
  {
    name: "Julie",
    comment: null,
    alert: false,
    mood: [1, "lonely"]
  },
  {
    name: "Jackson",
    comment: null,
    alert: false,
    mood: [1, "grateful"]
  },
  {
    name: "Michaela",
    comment: null,
    alert: true,
    mood: [1, "curious"]
  },
  {
    name: "John",
    comment: null,
    alert: false,
    mood: [1, "furious"]
  },
  {
    name: "Ashley",
    comment: null,
    alert: false,
    mood: [1, "invisible"]
  },
  {
    name: "Jen",
    comment: null,
    alert: false,
    mood: [1, "furious"]
  },
  {
    name: "Jacob",
    comment: null,
    alert: true,
    mood: [1, "lonely"]
  },
  {
    name: "Patricia",
    comment: null,
    alert: false,
    mood: [1, "focused"]
  },
  {
    name: "Ben",
    comment: null,
    alert: false,
    mood: [1, "grateful"]
  },
  {
    name: "Alex",
    comment: null,
    alert: true,
    mood: [1, "lonely"]
  },
  {
    name: "Alice",
    comment: null,
    alert: false,
    mood: [1, "curious"]
  },
  {
    name: "Kevin",
    comment: null,
    alert: false,
    mood: [1, "lonely"]
  },
  {
    name: "Rob",
    comment: null,
    alert: false,
    mood: [1, "invisible"]
  }
]

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

function renderClass(classview) {
  // insert html into classroom
  let classElm = document.querySelector('.classroom');
  classElm.innerHTML = renderStudents(classview);
  // record which student is clicked
  let squares = document.querySelectorAll(".flex-grid-thirds .grid-element");
  //!! this needs to specify what to store  in local storage
  // squares.forEach(el => el.addEventListener('click', localStorage.setItem('current', JSON.stringify(   ))));
}

// renders list of requested meetings
function insertAlert() {
  return `<li><a class="waves-effect" href="#!">Jen</a></li>`
}

function renderAlert() {
  // alertbool = 
  if (alertbool) {
    //!! needs a way of positioning this in correct part of html
    let alertElm = document.querySelector('   ');
    alertElm.innerHTML = insertAlert();
  }
}

function editJen() {
  //!! need to add name that kev uses
  let currentJen = students[12];
  let storedJen = localStorage.getItem('students');
  console.log(storedJen);
  if (storedJen != null) {
    currentJen = JSON.parse(storedJen); 
  }
  students[12].comment = currentJen.comment;
  students[12].alert = currentJen.alert;
  // students[12].mood[1] = currentJen.mood;
}
editJen();
renderClass(students);
// renderAlert()

