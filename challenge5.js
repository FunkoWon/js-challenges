// Instructions && Requirements

// Create a function called calculateOrder()

// The function receives:
// 1. price
// 2. quantity
// 3. member

// member will either be:
// true
// false

// Calculate:
// Subtotal = price * quantity

// Discount Rules:
// If subtotal is greater than or equal to 5000:
// discount = 20%

// Else if subtotal is greater than or equal to 3000:
// discount = 10%

// Else if subtotal is greater than or equal to 1000:
// discount = 5%

// Otherwise:
// discount = 0%

// MEMBER BONUS:
// If member === true:
// Add another 5% discount

// Example:
// Regular discount = 10%
// Member bonus = 5%
// Final discount = 15%

// IMPORTANT:
// Maximum total discount must NOT go above 25%

// Calculate:
// Subtotal
// Discount Percentage
// Discount Amount
// Final Total

// Return an object containing:
//
// {
//     subtotal: ?,
//     discountPercent: ?,
//     discountAmount: ?,
//     finalTotal: ?
// }

// Use a function
// Use parameters
// Use return
// Use if
// Use else if
// Use else
// Use ===
// Do NOT hardcode the answer
// Do NOT use Math.min()


function calculateOrder(price, quantity, member) {

    let subtotal = price * quantity;

    let discountPercent = 0;


    // Regular discount
    if (subtotal >= 5000) {

        discountPercent = 20;

    } else if (subtotal >= 3000) {

        discountPercent = 10;

    } else if (subtotal >= 1000) {

        discountPercent = 5;

    } else {

        discountPercent = 0;
    }


    // Member bonus
    if (member === true) {

        discountPercent = discountPercent + 5;
    }


    // Maximum 25%
    if (discountPercent > 25) {

        discountPercent = 25;
    }


    let discountAmount =
        subtotal * (discountPercent / 100);


    let finalTotal =
        subtotal - discountAmount;


    return {
        subtotal: subtotal,
        discountPercent: discountPercent,
        discountAmount: discountAmount,
        finalTotal: finalTotal
    };
}


let order = calculateOrder(1200, 3, true);


console.log("Subtotal:", order.subtotal);
console.log("Discount:", order.discountPercent + "%");
console.log("Discount Amount:", order.discountAmount);
console.log("Final Total:", order.finalTotal);



/*
My Output:
Subtotal: 3600
Discount: 15%
Discount Amount: 540
Final Total: 3060
*/