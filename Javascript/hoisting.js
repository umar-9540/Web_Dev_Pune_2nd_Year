console.log(a);
greet("Umar");
console.log(b);
// b("Umar");

var a = 5;
function greet(name) {
  console.log("Hello", name);
}

var b = function (name) {
  console.log("Hello", name);
};
