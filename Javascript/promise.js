// const pr = new Promise((resolve, reject) => {
//     let data = false;

//     if (data) {
//         resolve("Promise is resolved");
//     } else {
//         reject("Promise is rejected");
//     }
// });

// pr.then((message) => {console.log(message)})
// .catch((error) => {console.log(error)})
// .finally(() => {console.log("Promise is fulfilled")});

function wait(ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

Promise.all([
    wait(2000, "abc"),
    wait(1000, "def"),
    wait(5000, "ghi")
]).then(ans => console.log(ans));

// wait(2000)
//   .then((rangat) => console.log(rangat))
//   .catch()
//   .finally();

// Promise.resolve(6)
//   .then((number) => number * 2)
//   .then((number) => number + 3)
//   .then((ans) => console.log(ans))
//   .catch((error) => console.log(error));

// function orderPlace() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       console.log("Order placed successfully");
//       res();
//     }, 1000);
//   });
// }

// function orderPrepare() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       console.log("Order is prepared");
//       res();
//     }, 2000);
//   });
// }

// function orderDeliver() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       console.log("Order is delivered");
//       res();
//     }, 1000);
//   });
// }

// orderPlace()
//   .then(() => orderPrepare())
//   .then(() => orderDeliver())
//   .then(() => console.log("Khana aa gya"))
//   .catch(() => console.log("error"));
