const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};



const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};


const without = function(source, itemsToRemove) {
    let result = [];
    for (let item of source) {
        if (!itemsToRemove.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);
assertArraysEqual(result, ["hello", "world"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]); 
