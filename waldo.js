// Original findWaldo function
const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      if (names[i] === "Waldo") {
        found(i); // Pass index to callback
      }
    }
  };
  
  // Original actionWhenFound function
  const actionWhenFound = function(index) {
    console.log(`Found Waldo at index ${index}!`);
  };
  
  // Call findWaldo with names array and actionWhenFound callback
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  
  
  
  
  // Refactored findWaldo function using forEach
  const findWaldo = function(names, found) {
    names.forEach(function(name, index) {
      if (name === "Waldo") {
        found(index); // Pass index to callback
      }
    });
  };
  
  // Original actionWhenFound function
  const actionWhenFound = function(index) {
    console.log(`Found Waldo at index ${index}!`);
  };
  
  // Call findWaldo with names array and actionWhenFound callback
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);