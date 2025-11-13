'use strict';

// =============================
// Simple Calculator & Analyzer
// =============================

// Import prompt-sync for Node.js input
const prompt = require('prompt-sync')();

// =============================
// 1. INPUT HANDLING FUNCTIONS
// =============================

// Function to validate number input
function getValidNumberInput(promptMessage) {
    let input;
    while (true) {
        input = prompt(promptMessage);
        const num = Number(input);
        if (!isNaN(num)) {
            return num;
        } else {
            console.log("❌ Invalid input! Please enter a valid number.");
        }
    }
}

// Function to validate operator input
function getValidOperatorInput(promptMessage) {
    const validOperators = ['+', '-', '*', '/', '%', '**'];
    let operator;
    while (true) {
        operator = prompt(promptMessage);
        if (validOperators.includes(operator)) {
            return operator;
        } else {
            console.log("❌ Invalid operator! Please choose one of (+, -, *, /, %, **).");
        }
    }
}

// =============================
// 2. ARITHMETIC FUNCTIONS
// =============================

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error: Division by zero!";
    return a / b;
}
function modulo(a, b) { return a % b; }
function power(a, b) { return a ** b; }

// =============================
// 3. MAIN CALCULATOR LOGIC
// =============================

while (true) {
    console.log("\n===========================");
    console.log("🧮 SIMPLE JS CALCULATOR");
    console.log("===========================");

    // Get inputs
    const num1 = getValidNumberInput("Enter first number: ");
    const operator = getValidOperatorInput("Enter operator (+, -, *, /, %, **): ");
    const num2 = getValidNumberInput("Enter second number: ");

    let result;

    // Use switch to perform calculation
    switch (operator) {
        case '+': result = add(num1, num2); break;
        case '-': result = subtract(num1, num2); break;
        case '*': result = multiply(num1, num2); break;
        case '/': result = divide(num1, num2); break;
        case '%': result = modulo(num1, num2); break;
        case '**': result = power(num1, num2); break;
        default: result = undefined; break;
    }

    // =============================
    // 4. DATA TYPE ANALYSIS
    // =============================

    console.log(`\n🧾 Result: ${result}`);

    if (typeof result === 'number') {
        console.log(`Type: ${typeof result}`);

        // Positive / Negative / Zero
        if (result > 0) console.log("✅ The result is Positive.");
        else if (result < 0) console.log("⚠️ The result is Negative.");
        else console.log("🟰 The result is Zero.");

        // Integer or Float
        if (Number.isInteger(result))
            console.log("🔢 It's an Integer.");
        else
            console.log("🌊 It's a Floating-point number.");

        // Even or Odd (using ternary)
        console.log(result % 2 === 0 ? "🧮 It's Even." : "🔹 It's Odd.");

        // Example combining logical operators
        if (result > 0 && result % 2 === 0) {
            console.log("💡 The number is Positive and Even.");
        } else if (result > 0 || result < 0) {
            console.log("💡 The number is not Zero.");
        }

    } else if (typeof result === 'string') {
        console.log(`❗ ${result}`);
    } else {
        console.log(result ?? "⚠️ Result is undefined or null, something went wrong!");
    }

    // =============================
    // 5. EXIT MECHANISM
    // =============================

    const continueCalc = prompt("\nDo you want to perform another calculation? (yes/no): ").toLowerCase();
    if (continueCalc === 'no' ) {
        console.log("\n 😎 Exiting Calculator. Goodbye!");
        break;
    }
}

