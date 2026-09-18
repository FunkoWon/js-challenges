// Instructions && Requirements

// You are given a shopping cart.

// Each product has:
// name
// price
// quantity

// Find:
// 1. Total number of items in the cart
// 2. Total cart price
// 3. Most expensive product based on UNIT PRICE
// 4. Product with the highest quantity
// 5. Count how many DIFFERENT products cost more than 500 each

// Output
// Total Items
// Cart Total
// Most Expensive Product
// Highest Quantity Product
// Products Over 500

// Use ONE for loop
// Use if
// Use objects
// Use arrays
// Use multiplication *
// Use > comparisons

// Do NOT use reduce()
// Do NOT use filter()
// Do NOT use map()
// Do NOT use sort()
// Do NOT use Math.max()
// Do NOT hardcode the answers


const cart = [
    {
        name: "Keyboard",
        price: 1200,
        quantity: 2
    },
    {
        name: "Mouse",
        price: 650,
        quantity: 1
    },
    {
        name: "Monitor",
        price: 8500,
        quantity: 2
    },
    {
        name: "USB Cable",
        price: 250,
        quantity: 4
    },
    {
        name: "Webcam",
        price: 1800,
        quantity: 1
    }
];


let totalItems = 0;
let cartTotal = 0;

let mostExpensiveProduct = cart[0];

let highestQuantityProduct = cart[0];

let productsOver500 = 0;

// Add product.quantity to totalItems


// Calculate:
// product.price * product.quantity
//
// Add that result to cartTotal


// Check if the current product's UNIT PRICE
// is greater than mostExpensiveProduct.price
//
// If yes:
// update mostExpensiveProduct


// Check if product.quantity
// is greater than highestQuantityProduct.quantity
//
// If yes:
// update highestQuantityProduct


// If product.price is greater than 500:
//
// increase productsOver500 by 1

for (let i = 0; i < cart.length; i++) {

    let product = cart[i];
    product.totalPrice = product.price * product.quantity;
    product.quantity = product.quantity;
    product.price = product.price;

    totalItems += product.quantity;
    cartTotal += product.totalPrice;

    if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
    }
    if (product.quantity > highestQuantityProduct.quantity) {
        highestQuantityProduct = product;
    }
    if (product.price > 500) {
        productsOver500 = productsOver500 + 1;
    }


}


console.log("Total Items:", totalItems);

console.log("Cart Total:", cartTotal);

console.log(
    "Most Expensive Product:",
    mostExpensiveProduct.name
);

console.log(
    "Highest Quantity Product:",
    highestQuantityProduct.name
);

console.log(
    "Products Over 500:",
    productsOver500
);

/* My output:
Total Items: 10
Cart Total: 22850
Most Expensive Product: Monitor
Highest Quantity Product: USB Cable
Products Over 500: 4
*/