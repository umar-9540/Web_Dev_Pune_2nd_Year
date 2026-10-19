// function greet (name, callback) {
//     console.log(`Hello ${name}!`);
//     // console.log("Hello" + name + "!");
//     callback();
// }

// function welcome() {
//     console.log("Welcome to the world of callbacks");
// }

// greet("Ansh", welcome);


function orderPlace(cb) {
    setTimeout(function() {
        console.log("Order placed successfully");
        cb();
    }, 1000);
};

function orderPrepare(cb) {
    setTimeout(function() {
        console.log("Order is prepared");
        cb();
    }, 2000);
};

function orderDeliver() {
    setTimeout(function() {
        console.log("Order is delivered");
    }, 1000);
};

orderPlace(() => {
    orderPrepare(() => {
        orderDeliver(() => {
            khate((ngdg) => {
                dhona(() => {
                    sona()
                })
            })
        });
    });
})