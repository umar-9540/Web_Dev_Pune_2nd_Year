const student = {
    name: "Prabhat",
    age: 20,
    present: true,
}

console.log(student);

const jsonData = JSON.stringify(student); // Js Object to JSON
console.log(jsonData);

const data = JSON.parse(jsonData); // JSON to Js Object
console.log(data);