// Import and execute
import formatStringByWordsLength from "./formatStringByWordsLength.js";

try {
  console.log("Formatted string (CASE #1):", formatStringByWordsLength("This is a long, long, long sentence.")); 

  console.log("Formatted string (CASE #2):", formatStringByWordsLength("This is short one.")); 

  console.log("Formatted string (Empty input):", formatStringByWordsLength("")); 
} catch (error) {
  console.error(error.message);
}

try {
  console.log("Formatted string (Invalid input):", formatStringByWordsLength(12345)); 
} catch (error) {
  console.error(error.message);
}
