// Practice File: Statements Combined

let count = 10;
let result5 = "";

// add you code here
// using a while loop
while (count > 0) {
    if (count % 2 === 0) {
        result5 += `The number ${count} is even.`;
    } else {
        result5 += `The number ${count} is odd.`;
    }
    count--;
}

// using a do..while loop
// do {
//     if (count % 2 === 0) {
//         result5 += `The number ${count} is even.`;
//     } else {
//         result5 += `The number ${count} is odd.`;
//     }
//     count--;
// } while (count > 0);

// console.log the result
console.log(result5);