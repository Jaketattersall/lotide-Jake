const joinList = function(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
       if (i !== arr.length - 1) {
         result += ", ";
       }
     }
   return result;
   };
   const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
   const concepts = joinList(conceptList);
   console.log(`Today I learned about ${concepts}.`);