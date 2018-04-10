
  var elem = document.querySelector('.sidenav');
  var instance = M.Sidenav.init(elem, {});

let students = [
  {
    name: "Grace",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Tom",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Lizzie",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Jane",
    comment: null,
    alert: false,
    visible: false,
    mood: null
  },
  {
    name: "Andrew",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Julius",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Helen",
    comment: null,
    alert: false,
    visible: false,
    mood: null
  },
  {
    name: "Julie",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Jackson",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Michaela",
    comment: null,
    alert: true,
    visible: true,
    mood: null
  },
  {
    name: "John",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Ashley",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Jen",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Jacob",
    comment: null,
    alert: true,
    visible: true,
    mood: null
  },
  {
    name: "Patricia",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Ben",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Alex",
    comment: null,
    alert: true,
    visible: true,
    mood: null
  },
  {
    name: "Alice",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Kevin",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  },
  {
    name: "Rob",
    comment: null,
    alert: false,
    visible: true,
    mood: null
  }
]

var currentStudent = null;

function renderStudents(studs) {
  return `<div class="flex-grid-thirds">
  <div class="col grid-element ${studs[0].mood}"><a href="teacher_profile.html">${studs[0].name}</a></div>
  <div class="col grid-element happy"><a href="teacher_profile.html">Grace</a></div>
  <div class="col grid-element present"><a href="teacher_profile.html">Tom</a></div>
  <div class="col grid-element angry req"><a href="teacher_profile.html">Lizzie</a></div>
  <div class="col grid-element angry"><a href="teacher_profile.html">James</a></div>
</div>
<div class="flex-grid-thirds">
<div class="col grid-element sad"><a href="teacher_profile.html">Henry</a></div>
<div class="col grid-element angry"><a href="teacher_profile.html">Alice</a></div>
<div class="col grid-element happy"><a href="teacher_profile.html">Jen</a></div>
<div class="col grid-element angry"><a href="teacher_profile.html">Matt</a></div>
<div class="col grid-element incomp"><a href="teacher_profile.html">Julia</a></div>
</div>
<div class="flex-grid-thirds">
<div class="col grid-element sad"><a href="teacher_profile.html">Christine</a></div>
<div class="col grid-element happy req"><a href="teacher_profile.html">Jose</a></div>
<div class="col grid-element angry"><a href="teacher_profile.html">Kevin</a></div>
<div class="col grid-element incomp"><a href="teacher_profile.html">Tracey</a></div>
<div class="col grid-element present"><a href="teacher_profile.html">Paula</a></div>
</div>
<div class="flex-grid-thirds">
  <div class="col grid-element angry"><a href="teacher_profile.html">Jack</a></div>
  <div class="col grid-element sad"><a href="teacher_profile.html">Lucy</a></div>
  <div class="col grid-element present"><a href="teacher_profile.html">James</a></div>
  <div class="col grid-element happy"><a href="teacher_profile.html">Hillary</a></div>
  <div class="col grid-element happy"><a href="teacher_profile.html">Patricia</a></div>
</div>`
}

function render(classview) {
  let classElm = document.querySelector('.classroom');
  classElm.innerHTML = renderStudents(classview)
  let squares = document.querySelectorAll(".flex-grid-thirds .grid-element")
  squares.forEach(el => el.addEventListener('click', currentStudent = el.name ))
}