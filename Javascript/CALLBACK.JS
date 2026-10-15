// function greet(name, callback) {
//     console.log(`Hello, ${name}! hfrddfh`);
//     // console.log("Hello, " + name + "!");

//     callback();
// }

// function welcome() {
//     console.log("Welcome to the world of JavaScript!");
// }

// greet("Sonam", welcome);

function orderPlace(orderPrepare, orderDeliver) {
    setTimeout(() => {
        console.log("Order placed successfully!");
        orderPrepare(orderDeliver);
    }, 1000);
}

function orderPrepare(orderDeliver) {
    setTimeout(() => {
        console.log("Order is prepared!");
        orderDeliver();
    }, 2000);
}

function orderDeliver() {
    setTimeout(() => {
        console.log("Order is delivered!");
    }, 1000);
}

orderPlace(orderPrepare, orderDeliver);