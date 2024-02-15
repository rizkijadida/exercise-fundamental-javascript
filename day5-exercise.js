// // EXERCISE 1 ===========================

// //  NO.1 Write a function to get the lowest, highest and average value in the array (with and without sort function).

// // const arr = [12, 5, 23, 18, 4, 45, 32];
// // const result = findMinMaxAvg(arr);
// // function findMinMaxAvg(arr) {
// //   let min = arr[0];
// //   let max = arr[0];
// //   let sum = 0;

// //   for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] < min) {
// //       min = arr[i];
// //       console.log(min);
// //     } else if (arr[i] > max) {
// //       max = arr[i];
// //       console.log(max);
// //     }
// //     sum += arr[i];
// //   }

// //   const avg = sum / arr.length;

// //   return {
// //     min,
// //     max,
// //     avg,
// //   };
// // }

// // console.log(`Nilai terendah: ${result.min}`);
// // console.log(`Nilai tertinggi: ${result.max}`);
// // console.log(`Nilai rata-rata: ${result.avg}`);
// // console.log(
// //   `Lowes = ${result.min}, highest = ${result.max}, avg = ${result.avg}`
// // );

// // no.2 Write a function that takes an array of words and returns a string by concatenating the words in the array,

// // function joinWords(words) {
// //   if (words.length === 0) {
// //     return ""; // Handle empty array gracefully
// //   } else if (words.length === 1) {
// //     return words[0]; // No need for commas or "and" for a single word
// //   } else {
// //     // Use join for all words except the last, add comma afterward
// //     const joinedWithoutLast = words.slice(0, -1).join(", ");
// //     // Add "and" and the last word
// //     return joinedWithoutLast + " and " + words[words.length - 1];
// //   }
// // }

// // // Example usage
// // const words1 = ["apple", "banana", "cheery", "date"];

// // console.log(joinWords(words1));

// // no 3 Write a function to split a string and convert it into an array of words
// // function splitStringToWords(text) {
// //     // Remove leading and trailing whitespace
// //     const trimmedText = text.trim();

// //     // Split the text into an array based on whitespace and punctuation
// //     const words = trimmedText.split(/\s+|\W+/);

// //     // Remove empty strings and punctuation from each word
// //     const filteredWords = words.filter(word => word.length > 0).map(word => word.trim());

// //     return filteredWords;
// //   }

// //   // Example usage
// //   const text = "Hello World";
// //   const words = splitStringToWords(text);
// //   console.log(words);

// // no 4 Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// //of the same length.

// // function calculateCorrespondingElements(arr1, arr2) {
// //     // Check if arrays have the same length
// //     if (arr1.length !== arr2.length) {
// //       throw new Error("Arrays must have the same length");
// //     }

// //     // Use map to iterate and calculate for each element
// //     return arr1.map((value, index) => {
// //       const secondValue = arr2[index];
// //       return value + secondValue;
// //       // Choose your desired calculation here:
// //       // - Addition: return value + secondValue;
// //       // - Subtraction: return value - secondValue;
// //       // - Multiplication: return value * secondValue;
// //       // - Division: return value / secondValue; (check for division by zero)
// //       // - ... (other calculations as needed)

// //       // Replace with your desired calculation logic
// //     });
// //   }

// //   // Example usage
// //   const arr1 = [1, 2, 3];
// //   const arr2 = [3, 2, 1];

// //   const result = calculateCorrespondingElements(arr1, arr2);
// //   console.log(result);

// // Cara kak Daniel ================

// // [1, 2, 3, 4, 5]
// // [1, 2, 3]

// // function calculateArray (arr1, arr2) {
// //     const result = [];
// //     const maxLength = Math.max(arr1.length, arr2.length);

// //     for (let i = 0; i < maxLength; i ++) {
// //         const sum = (arr1[i] || 0) + (arr2[i] || 0);
// //         result.push (sum);
// //     }

// //     return result;
// // }

// // console.log(calculateArray ([1, 2, 3, 5], [1, 2, 3]));

// //   no 5 Write a function that adds an element to the end of an array. However, the element should only be added if it is
// // not already in the array.

// // function addUniqueElement(arr, element) {
// //     // Check if element already exists using indexOf
// //     if (arr.indexOf(element) === -1) {
// //       // Push element to array if not found
// //       arr.push(element);
// //     }
// //   }

// //   // Example usage
// //   const numbers = [1, 2, 3, 4];
// //   addUniqueElement(numbers, 4);
// //   console.log(numbers);

// //   addUniqueElement(numbers, 7);
// //   console.log(numbers);

// // EXERCISE 2 ===================================

// // NO 1 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

// // function removeOddNumbers(arr) {
// //     // Use filter to create a new array with only even numbers
// //     return arr.filter(number => number % 2 === 0);
// //   }

// //   // Example usage
// //   const numbers = [1, 2, 3, 4, 5, 6];
// //   const evenNumbers = removeOddNumbers(numbers);
// //   console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// // NO 2 Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// // array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// //     array can only contain 5 elements).

// // function maxSize (numbers, max) {
// //     const result = [];

// //     console.log(numbers);

// //     numbers.forEach(item) => {
// //         if (result.Length === max) return;

// //         result.push(item);
// //     };

// //     return result;
// // }

// // const max = 5;
// // const numbers = [5, 10, 24, 3, 6, 7, 8];

// // console.log(maxSize (numbers, max));
// // NO 3 Write a function that will combine 2 given array into one array

// // function combineArrays(arr1, arr2) {
// //   return [...arr1, ...arr2];
// // }

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const combinedArray = combineArrays(arr1, arr2);
// // console.log(combinedArray);

// // NO 4 Write a function that will combine 2 given array into one array

// // function findDuplicatesWithLoop(arr) {
// //   const duplicates = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];
// //     if (arr.indexOf(element, i + 1) !== -1) {
// //       // Element found later in the array, mark as seen if not already in duplicates
// //       if (!duplicates.includes(element)) {
// //         duplicates.push(element);
// //       }
// //     }
// //   }
// //   return duplicates;
// // }

// // const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// // const duplicates = findDuplicatesWithLoop(arr);
// // console.log("Duplicates:", duplicates);

// // NO 5 Write a function to find the difference in 2 given array

// // function findDifferenceWithLoops(arr1, arr2) {
// //     // Filter elements from arr1 not found in arr2
// //     const difference1 = arr1.filter(x => !arr2.includes(x));

// //     // Filter elements from arr2 not found in arr1
// //     const difference2 = arr2.filter(x => !arr1.includes(x));

// //     // Combine both filtered arrays for the complete difference
// //     return [...difference1, ...difference2];
// //   }

// //   const arr1 = [1, 2, 3, 4, 5];
// //   const arr2 = [3, 4, 5, 6, 7];
// //   const difference = findDifferenceWithLoops(arr1, arr2);
// //   console.log(difference); // Output: [1, 2, 5, 6, 7]

// // EXERCISE 3 ============================

// // NO 1.  Based on the array below write a function that will return primitive data types only.

// // function identifyPrimitives(arr) {
// //     const primitiveTypes = ["number", "string", "boolean", "undefined", "symbol"];
// //     return arr.filter(element => primitiveTypes.includes(typeof element));
// //   }

// //   const arr = [1, [], undefined, {}, "string", {}, []];
// //   const primitives = identifyPrimitives(arr);
// //   console.log(primitives);

// // NO 2 Write a function from a given array of numbers and return the second smallest number
// // function findSecondSmallest(arr) {
// //     // Check if the array has at least two elements
// //     if (arr.length < 2) {
// //       throw new Error("Array must contain at least two elements");
// //     }

// //     // Find the smallest number using Math.min and remove it from the array
// //     const smallest = Math.min(...arr);
// //     arr.splice(arr.indexOf(smallest), 1);

// //     // Find the smallest number in the modified array (second smallest overall)
// //     return Math.min(...arr);
// //   }

// //   // Example usage
// //   const numbers = [5, 3, 1, 7, 2, 6];
// //   const secondSmallest = findSecondSmallest(numbers);
// //   console.log(secondSmallest);

// // NO 3 Write a function from a given array of mixed data types and return the sum of all the number
// // function sumNumbers(arr) {
// //     // Initialize a sum variable to start with
// //     let sum = 0;

// //     // Iterate through each element in the array
// //     for (const element of arr) {
// //       // Check if the element is a number using typeof
// //       if (typeof element === "number") {
// //         // Add the number to the sum
// //         sum += element;
// //       }
// //     }

// //     // Return the sum of all numbers
// //     return sum;
// //   }

// //   // Example usage
// //   const mixedArr = ["3", 1, "string", null, false, undefined, 2];
// //   const totalSum = sumNumbers(mixedArr);
// //   console.log(totalSum);

// //  NO 4 Write a function from the below array of number that will return sum of duplicate values. let
// // arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// // a. The function will return 40

// // function sumDuplicates(arr) {
// //     // Create a dictionary to store counts of each number
// //     const numberCounts = {};
// //     for (const num of arr) {
// //       if (num in numberCounts) {
// //         numberCounts[num] += 1;
// //       } else {
// //         numberCounts[num] = 1;
// //       }
// //     }

// //     // Calculate the sum of duplicate values
// //     let duplicateSum = 0;
// //     for (const num in numberCounts) {
// //       if (numberCounts[num] > 1) {
// //         // Add only the extra occurrences (excluding the first one)
// //         duplicateSum += num * (numberCounts[num] - 1);
// //       }
// //     }

// //     return duplicateSum;
// //   }

// //   // Example usage
// //   const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10, 10];
// //   const totalDuplicateSum = sumDuplicates(arr);
// //   console.log(totalDuplicateSum);

// // CARA KAK DANIEL =========================

// // function sumDuplicate(arr) {
// //   const duplicateValues = arr.filter((value, index, array) => {
// //     console.log(index);

// //     return array.indexOf(value) !== index;
// //   });
// //   console.log(duplicateValues);

// //   let result = 0;
// //   for (let item of arr) {
// //     if (duplicateValues.includes(item)) {
// //       result += item;
// //     }
// //   }
// //   return result;
// // }

// // console.log(sumDuplicate([10, 20, 40, 40, 10, 50, 30, 10, 60, 10]));

// // NO 5 Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// // between rock, paper, or scissor.
// // a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

// // function playRockPaperScissors(yourChoice) {
// //     // Convert your choice to lowercase for case-insensitive comparison
// //     yourChoice = yourChoice.toLowerCase();

// //     // Validate your choice
// //     if (!["rock", "paper", "scissors"].includes(yourChoice)) {
// //       throw new Error("Invalid choice. Please choose rock, paper, or scissors.");
// //     }

// //     // Generate a random computer choice
// //     const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

// //     // Define winning conditions based on choice comparison
// //     const winConditions = {
// //       rock: ["scissors"],
// //       paper: ["rock"],
// //       scissors: ["paper"],
// //     };

// //     // Check if you win, lose, or tie
// //     if (winConditions[yourChoice].includes(computerChoice)) {
// //       return "Win!";
// //     } else if (yourChoice === computerChoice) {
// //       return "Tie!";
// //     } else {
// //       return "Lose!";
// //     }
// //   }

// //   // Example usage
// //   try {
// //     const result = playRockPaperScissors("Rock");
// //     console.log("You", result);

// //     const result2 = playRockPaperScissors("PAPER");
// //     console.log("You", result2);

// //     const result3 = playRockPaperScissors("abc");
// //     console.log("You", result3); // Error: Invalid choice
// //   } catch (error) {
// //     console.error(error.message);
// //   }

// // CARA KAK DANIEL

function gameSuit(playerChoice) {
    const choices = ["batu", "gunting", "kertas"];
    const compChoice = choices[Math.floor(Math.random() * 2.9)];

    if (!choises.includes(playerChoice)) {
        return "wrong input";
    }

    if (playerChoice === compChoice) {
        return "draw";
    }

    if (
    (playerChoice === "batu" && compChoice === "gunting") ||
    (playerChoise === "gunting" && compChoice "kertas") ||
    (playerChoise === "kertas" && compChoice "batu")) {
        return "Win";
    }
     return "Lose";

    console.log(compChoice);
}

console.log(gameSuit("gunting"));