function findEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}

function findOddNumbers(arr) {
    return arr.filter((num) => num % 2 !== 0);
}

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
console.log("Pattern:");
printPattern(5);
