
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
  let classElm = document.querySelector('.classroom');
  classElm.innerHTML = renderStudents(classview);
  // record which student is clicked
  let squares = document.querySelectorAll(".flex-grid-thirds .grid-element");
  //!! how do I pass in the student data corresponding to the student square that was clicked?
  // squares.forEach(el => el.addEventListener('click', localStorage.setItem('current', JSON.stringify(   ))));
}

// renders list of requested meetings
function insertAlert() {
  return `<a class="waves-effect" href="#!">Jen</a>`
}

function renderAlert() {
  alertbool = true;
  if (alertbool) {
    //!! I've always used innerHTML to pass html into a div according to its class, but here I want the name to be displayed in a list
    //!! so what would I use instead of a innerHTML?
    let alertElm = document.querySelector('#inserthere');
    alertElm.innerHTML = insertAlert();
  }
}

function editJen() {
  let currentJen = students[12];
  let storedJen = localStorage.getItem('students');
  //!! this console.log returns: [{"name":"Jane","comment":"","alert":false,"mood":[]}] even after interacting with the student UI 
  //!! this suggests that Kevin's code is not correctly storing the data when the mood, comment and alert are input?
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

