function min(numbers) {
    // Write code here that returns the smallest value in numbers
    let minNumber = numbers[0]; // Initialize minNumber within the function scope
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minNumber) {
        minNumber = numbers[i]; // Update minNumber if current number is smaller
      }
    }
  
    return minNumber; // Return the smallest number found
  }
  