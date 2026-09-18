// Instructions && Requirements

// A = divisible by both 2 and 3
// B = divisible by 2 only
// C = divisible by 3 only
// D = divisible by neither

// Output
// Print each number with its category
// Example: 12 -> A

// A Count
// B Count
// C Count
// D Count

// Use a for loop
// Use if
// Use else if
// Use else
// Use %
// Use &&
// Use ===
// Do NOT use filter()
// Do NOT use map()
// Do NOT use reduce()
// Do NOT use forEach()
// Do NOT hardcode the final counts


const numbers = [4, 9, 12, 15, 18, 20, 21, 24, 27, 30, 36, 40, 45];

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

let total = 0;
let average = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {

    let number = numbers[i];

    if (number % 2 === 0 && number % 3 === 0) {

        console.log(number + " -> A");
        countA = countA + 1;

    } else if (number % 2 === 0) {

        console.log(number + " -> B");
        countB = countB + 1;

    } else if (number % 3 === 0) {

        console.log(number + " -> C");
        countC = countC + 1;

    } else {

        console.log(number + " -> D");
        countD = countD + 1;
    }

    total = total + number;
    count = count + 1;
}

if (count > 0) {
    average = total / count;
}

console.log("A Count:", countA);
console.log("B Count:", countB);
console.log("C Count:", countC);
console.log("D Count:", countD);

console.log("Average:", average);
console.log("Total:", total);
console.log("All Count:", count);


/**
 My output:
4 -> B
9 -> C
12 -> A
15 -> C
18 -> A
20 -> B
21 -> C
24 -> A
27 -> C
30 -> A
36 -> A
40 -> B
45 -> C
A Count: 5
B Count: 3
C Count: 5
D Count: 0
Average: 23.153846153846153
Total: 301
All Count: 13
 */