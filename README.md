# JavaScript Statements Practice Lab

## Overview

Welcome to the JavaScript Statements Practice Lab! This lab is designed to help you reinforce your understanding of JavaScript variables, conditionals, and loops through hands-on practice. In this lab, you'll work on fixing code snippets to make them work correctly according to the given instructions. Each problem presents intentional mistakes for you to identify and correct.

## Learning Goals

- Practice using JavaScript variables (`const` and `let`) to declare values.
- Familiarize yourself with conditional statements (`if`, `else if`, `else`, ternary operator, and switch statement).
- Gain experience working with repetition statements (`while` loop and `do..while` loop).

## Instructions

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Review the instructions and code provided in each file.
5. Fix the code to make it work correctly based on the instructions provided.
6. Run `npm test` to execute the tests and check your solutions.
7. Continue fixing the code until all tests pass.

## Tips

- **Read the Instructions Carefully**: Pay close attention to the instructions provided in each problem statement.
- **Check for Mistakes**: Look for intentional mistakes in the code and think critically about how to fix them.
- **Use Documentation**: If you're unsure about any JavaScript syntax or concepts, refer to the MDN Web Docs or other reliable sources for clarification.
- **Test Your Code**: Run the tests frequently to verify your solutions and track your progress.


### Files repetitionStatements.js and selectionStatements.js

**Instructions:**

- Fix the code to make it work correctly.
- There are intentional mistakes. Pay close attention to each line of code and question its logic
- Do not change the variable names or values. Only change the selection statements.
- Your goal is to make sure result1, result2, result3, result4, and dayType match the values expected by the tests.
- Open the test files test/repetitionStatements.test.js and test/selectionStatements.test.js to see the expected results for the variables mentioned above.


### Statements Combined: File statements.js

**Instructions:**

- Use a `while` or `do..while` loop to iterate over the `count` variable until it reaches 0 (excluded).
- Inside the loop, check if the current count is odd or even.
    - **Pro Tip**: If you're unfamiliar with the `%` operator used in some of the exercises, check out the [MDN documentation to learn more about it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).
- If the count is odd, concatenate a sentence like the one below to result5. 
    - Example sentence: `"The number 5 is odd."`, with the current number in place of 5.
- If the count is even, concatenate a sentence like the one below to result5. 
    - Example sentence: `"The number 4 is even."`, with the current number in place of 4.
- Open the test file test/statements.test.js to see the expected results for the `result5` variable.


## Resources

- [MDN Web Docs: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Web Docs: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)