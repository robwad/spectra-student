


// profile rendering
function insertProfile(stud) {
  return `<img src="../images/aug3.png">
  <h1>${stud.name}</h1>`
}

function renderProfile(stud) {
  let profElm = document.querySelector('.profile');
  profElm.innerHTML = insertProfile(stud);
}

// mood rendering
function insertMood(stud) {
  return `<p>${stud.mood[0]}</p>
  <h1>${stud.mood[1]}</h1>`
}

function renderMood(stud) {
  let moodElm = document.querySelector('.moodtoday');
  moodElm.innerHTML = insertMood(stud);
}

// comment rendering
function insertComment(stud) {
  return `<h3>Today's Comment</h3>
  <p>06/26 ${stud.comment}</p>`
}

function renderComment(stud) {
  let commentElm = document.querySelector('.commenttoday');
  commentElm.innerHTML = insertComment(stud);
}

let currentprofile = localStorage.getItem('current');

let test = {
  name: "Ashley",
  comment: "Hey there!",
  alert: false,
  mood: ["\uD83D\uDE05", "grateful"]
}
renderProfile(test);
renderMood(test);
renderComment(test);
