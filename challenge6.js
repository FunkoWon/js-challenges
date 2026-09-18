// Instructions && Requirements

// Create a function called validateUser()

// The function receives:
// 1. username
// 2. email
// 3. password
// 4. age

// Validation Rules:

// username:
// - must not be empty
// - must be at least 3 characters

// email:
// - must include "@"
// - must include "."

// password:
// - must be at least 8 characters

// age:
// - must be 18 or above

// Output:
// Return an object with:

// {
//   isValid: ?,
//   errors: []
// }

// If a rule fails,
// push the error message into the errors array.

// Example:
// errors.push("Username must be at least 3 characters")

// If errors.length is 0,
// isValid should be true.
// Otherwise,
// isValid should be false.

// Use a function
// Use parameters
// Use if
// Use array.push()
// Use .length
// Use includes()
// Use return
// Do NOT hardcode the final answer


function validateUser(username, email, password, age) {

    let errors = [];

    if (!username || username.trim().length < 3) {
        errors.push("Name is required.");
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
        errors.push("A valid email is required.");
    }

    if (!age || age < 18) {
        errors.push("Age must be a 18+.");
    }
    if (!password || password.trim().length < 8) {
        errors.push("Password is required.");
    }


    return {
        isValid: errors.length === 0,
        errors: errors,
    }

}


let userCheck = validateUser(
    "Nick",
    "john.doe@company.org",
    "12345",
    18
);

console.log("Is Valid:", userCheck.isValid);
console.log("Errors:", userCheck.errors);