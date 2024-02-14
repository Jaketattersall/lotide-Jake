const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};
const countLetters = function(sentence) {
    const letterCounts = {};
    const cleanedSentence = sentence.replace(/\s/g, '').toLowerCase();

    for (const char of cleanedSentence) {
        if (/[a-z]/.test(char)) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    }

    return letterCounts;
};

// Test cases
console.log(countLetters('LHL')); // => { l: 2, h: 1 }
console.log(countLetters('hello world')); // => { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
