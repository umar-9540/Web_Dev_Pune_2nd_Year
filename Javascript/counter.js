const p = document.querySelector("#counter");
const incBtn = document.querySelector("#increase");
const decBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

let count = 0;

incBtn.addEventListener("click", function () {
    count++;
    p.textContent = count;
});

decBtn.addEventListener("click", function () {
    count--;
    p.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    p.textContent = count;
})