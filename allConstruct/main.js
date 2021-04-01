// Write a function allConstruct(target, wordBank)
// that accepts target string and an array of strings.

// The function should return a 2D array containing all of
// the ways that the target can be constructed by concatenating
// elements of the wordBank array.

// You may reuse elements of wordBank as many times as needed.

const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank,memo);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push(...targetWays);
        }
    }

    memo[target] =  result;
    return result;
};

// m = target.length
// n = wordBank.length

// time: O(n^m)
// space: O(m)

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// [
//     [ "purp", "le" ],
//     [ "p", "ur", "p", "le" ]
// ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// [
//     ["ab", "cd", "ef",],
//     ["ab", "c", "def"],
//     ["abc", "def"],
//     ["abcd", "ef"]
// ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// []
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// []