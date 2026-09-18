// Instructions && Requirements

// Challenge 7 — Product Data Transformation

// You are given an array of product objects.

// Create a NEW array called updatedProducts.

// Each product in updatedProducts must contain:
// name
// price
// discountedPrice

// Discount Rules:
// price >= 5000 = 20% discount
// price >= 1000 = 10% discount
// price < 1000 = 5% discount

// Example:
// {
//     name: "Keyboard",
//     price: 1200,
//     discountedPrice: 1080
// }

// Output:
// Print updatedProducts

// Use map()
// Use if / else if / else
// Use return
// Use objects
// Do NOT modify the original products array
// Do NOT use a for loop
// Do NOT use forEach()
// Do NOT hardcode discounted prices


const products = [
    {
        name: "Keyboard",
        price: 1200
    },
    {
        name: "Mouse",
        price: 650
    },
    {
        name: "Monitor",
        price: 8500
    },
    {
        name: "Webcam",
        price: 1800
    },
    {
        name: "USB Cable",
        price: 250
    }
];


const updatedProducts = products.map(function (product) {

    let discountPercent = 0;


    // Determine discount percentage
    if (product.price >= 5000) {
        discountPercent = 20;
    } else if (product.price >= 1000) {
        discountPercent = 10;
    } else {
        discountPercent = 5;
    }


    // Calculate discount amount
    let discountAmount = (product.price * discountPercent) / 100;


    // Calculate discounted price
    let discountedPrice = product.price - discountAmount;


    // Return a NEW object containing:
    // name
    // price
    // discountedPrice
    return {
        name: product.name,
        price: product.price,
        discountedPrice: discountedPrice
    };

});


console.log(updatedProducts);