// console.log("first");
// console.log("second");

// function timeTakingFunc() {
//     const start = Date.now();

//     while (Date.now() - start < 3000) {
//         // WAIT
//     }
// }

// timeTakingFunc();

// console.log("third");

// console.log("first");

const timeoutId = setTimeout(() => {
    console.log("second");
}, 3000);

// clearTimeout(timeoutId);

// console.log("third");


// setTimeout(callback func, delay in milliseconds);

// let count = 1;

// const intervalId = setInterval(() => {
//     console.log(count);

//     count++;

//     if (count > 5) {
//         clearInterval(intervalId);
//         console.log("Interval cleared");
//     }
// }, 1000);

console.log("first");

setTimeout(() => {
    console.log("second");
}, 0);

console.log("third");