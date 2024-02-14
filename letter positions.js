const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (char === ' ') {
        continue;
      }
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  
    return results;
  };
  
  // Test case
  const result = letterPositions("hello");
  console.log(result);
  // Test with a small string
const result = letterPositions("hello");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);
