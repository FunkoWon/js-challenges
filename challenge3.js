// Instructions && Requirements

// Challenge 3 — Product Price Analyzer

// You are given a list of product prices.

// Find:
// 1. The highest price 
// 2. The lowest price
// 3. The total price
// 4. The average price
// 5. How many products cost more than 500
// 6. How many products cost 500 or less

// Output
// Highest Price
// Lowest Price
// Total
// Average
// Expensive Count
// Affordable Count

// Use only ONE for loop
// Use if
// Use else
// Use > and <
// Use += or normal addition
// Do NOT use Math.max()
// Do NOT use Math.min()
// Do NOT use reduce()
// Do NOT use filter()
// Do NOT use sort()
// Do NOT hardcode the answers


const prices = [350, 899, 1200, 499, 750, 199, 1500, 650, 300];

let highest = prices[0];
let lowest = prices[0];

let total = 0;
let average = 0;

let expensiveCount = 0;
let affordableCount = 0;


for (let i = 0; i < prices.length; i++) {

    let price = prices[i];

    // Check if price is greater than highest
    if (price >= highest) {
        highest = price;
    } else if (price <= lowest) {
        lowest = price;
    }
    // Check if price is lower than lowest


    // Add price to total
    total = total + price;


    // If price is greater than 500
    if (price > 500) {
        expensiveCount = expensiveCount + 1;
    } else {
        affordableCount = affordableCount + 1;
    }
    // increase expensiveCount

    // Otherwise
    // increase affordableCount

}


// Calculate average safely here
if (prices.length > 0) {
    average = total / prices.length;
} else {
    average = 0;
}


console.log("Highest Price:", highest);
console.log("Lowest Price:", lowest);
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Expensive Count:", expensiveCount);
console.log("Affordable Count:", affordableCount);