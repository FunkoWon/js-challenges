// Instructions && Requirements

// 1. Are divisible by 3
// 2. Are NOT divisible by 5
// 3. Are greater than 10

// Output
// Count
// Total
// Average

//Use a for loop
//Use if
//Use %
//Use &&
//Do NOT use filter()
//Do NOT use reduce()
//Do NOT use sum-like shortcuts


const numbers = [3, 7, 12, 18, 21, 25, 30, 33, 40, 42, 50, 55, 60];

let count = 0;
let total = 0;
let average = 0

for (let i = 0; i < numbers.length; i++) {

    let number = numbers[i];

    if (
        number % 3 === 0 &&
        number % 5 !== 0 &&
        number > 10
    ) {
        console.log(number);

        count = count + 1;
        total = total + number;

    } if (count > 0) {
        average = total / count;
    }
}

console.log("Count:", count);
console.log("Total:", total);
console.log("Average:", average)


/*
12
18
21
33
42
Count: 5
Total: 126
Average: 25.2
*/