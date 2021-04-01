// Write a function fib(n) that takes in a number as an
// argument. The function should return the n-th
// number of the Fibonacci sequence.

// The 0th number of sequence is 0.
// The 1st number of sequence is 1.

// Tabulation method.

// for fib(6) -> 8 we create a 7-elements array (from 0 to 6)
// each subproblem corresponds to their position in array.

// time: O(n) - iterating through an array
// space: O(n)

const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }

    return table[n];
}

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025