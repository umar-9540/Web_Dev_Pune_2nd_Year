console.log("Helloo");

// function changeText() {
//   const headings = document.getElementsByTagName("h1");
//   console.log(headings);
//   headings[1].textContent = "Hello, Rangat";
// }

// const heading = document.getElementsByClassName("heading");
// heading[0].textContent = "Hello, Rangat";

// const heading = document.getElementById("heading");
// heading.textContent = "Hello, Rangat";

// const heading = document.querySelector("h1"); // only first tag it gets
// heading.textContent = "Hello, Rangat";

// const heading = document.querySelector(".heading"); // only first class it gets

// const heading = document.querySelector("#heading"); // only first id it gets

// const heading = document.querySelectorAll("h1"); // all tags it gets

const heading = document.querySelector(".heading");
heading.style.backgroundColor = "red";
heading.style.color = "white";

const p = document.querySelector("p");
// p.classList.add("highlight");

// p.classList.remove("highlight");

// function changeBackground() {
//   p.classList.toggle("highlight");
// }

// const ul = document.querySelector("#students");
// const input = document.querySelector("#student-name");
// const button = document.querySelector("#add-student");

// button.addEventListener("click", function () {
//   const newStudent = document.createElement("li");
//   newStudent.textContent = input.value;
//   ul.append(newStudent);
// });


// function addStudent() {
//   //   console.log(input.value);

//   const newStudent = document.createElement("li");
//   newStudent.textContent = input.value;
//   ul.append(newStudent);
// }

const paragraph = document.querySelector("#paragraph");
function deleteParagraph() {
  paragraph.remove();
}

const input = document.querySelector("#live-track");
const output = document.querySelector("#live-output");

input.addEventListener("input", function() {
  output.textContent = input.value;
});


const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", function(event) {
  console.log(event.type);
  console.log(event.target);
  event.preventDefault();
  output.textContent = "Form Submitted by " + emailInput.value;
})