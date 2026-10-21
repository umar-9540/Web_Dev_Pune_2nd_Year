// async function getMessage() {
//   return "Hello from async";
// }

// // Async Function always return a Promise
// // console.log(getMessage());
// getMessage().then((msg) => console.log(msg));

// let a = async function () {
//     console.log("Hello from Func Expression")
// };

// let b = async () => {
//     console.log("Hello from Arrow Function")
// };

// function waitFunc(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function run() {
//   console.log("Step 1");

//   await waitFunc(1000);

//   console.log("Step 2 after one second");

//   await waitFunc(2000);

//   console.log("Step 3 after another half second");
// }

// run();

// function getNumber() {
//   return Promise.resolve(5);
// }

// // Promise style
// getNumber()
//   .then((number) => number * 2)
//   .then((ans) => console.log(ans));

// // async/await style
// async function run() {
//     const number = await getNumber();
//     const ans = number * 2;

//     console.log(ans);
// }

// run();

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cant divide by 0");
    }
    return a / b;
} 

// console.log(divide(10, 5));

async function run () {
    try {
        const val = divide(10, 0);
        console.log(val);
    }
    catch(error) {
        console.log(error.name);
        console.error("something not right: ", error.message);
        console.log(error.stack);
    }
    finally {
        console.log("Finally ended");
    }
}

run();