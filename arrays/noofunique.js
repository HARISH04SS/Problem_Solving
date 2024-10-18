function countUnique(arr) {
    let frequency = {};
    
    // Count the frequency of each element
    for (let i = 0; i < arr.length; i++) {
      if (frequency[arr[i]]) {
        frequency[arr[i]]++;
      } else {
        frequency[arr[i]] = 1;
      }
    }
    
    // Count elements that appear only once
    let uniqueCount = 0;
    for (let key in frequency) {
      if (frequency[key] === 1) {
        uniqueCount++;
      }
    }
    
    return uniqueCount;
  }
  
  let arr = [2, 3, 4, 2, 1, 7];
  console.log(countUnique(arr)); // Output: 4
  