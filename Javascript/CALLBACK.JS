// function greet (name, callback) {
//     console.log(`Hello ${name}!`);
//     // console.log("Hello" + name + "!");
//     callback();
// }

// function welcome() {
//     console.log("Welcome to the world of callbacks");
// }

// greet("Ansh", welcome);


function orderPlace(orderPrepare) {
    setTimeout(function() {
        console.log("Order placed successfully");
        orderPrepare(orderDeliver);
    }, 1000);
};

function orderPrepare(orderDeliver) {
    setTimeout(function() {
        console.log("Order is prepared");
        orderDeliver();
    }, 2000);
};

function orderDeliver() {
    setTimeout(function() {
        console.log("Order is delivered");
    }, 1000);
};

orderPlace(orderPrepare);