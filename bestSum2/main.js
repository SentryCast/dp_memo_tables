// Write a function bestSum(targetSum, numbers) 
// that takes in a targetsSum and an array of
// numbers as arguments.

// The function should return an array containing
// the shortest combination of numbers that add up
// to exactly the targetSum.

// m = targetSum
// n = numbers.length
// time: O(m^2 * n)
// space: O(m^2)

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combintation = [...table[i], num];
                if (!table[i + num] || table[i + num].length > combintation.length) {
                    table[i + num] = combintation;
                }
            }
        }
    }

    return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // 7
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]