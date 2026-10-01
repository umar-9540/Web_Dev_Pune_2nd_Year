let student = {
  name: "Sakshi",
  course: "B.Tech",
  city: "Pune",
  skills: ["C++", "Javscript", "sona"],
  age: 20,
  "lastName": "rani",
  "": "empty key",
};

student.attendance = 100;
delete student.age;

console.log(student);
console.log(student.name);
console.log(student.skills[2]);
console.log(student["name"]);
// console.log(student.lastName);
console.log(student["last name"]);
console.log(student[""]);
