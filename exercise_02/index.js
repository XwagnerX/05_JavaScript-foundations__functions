// Import and execute
import getTotalWordsFromString from "./getTotalWordsFromString.js";

console.log("Total words (1):", getTotalWordsFromString("This is a test sentence."));
console.log("Total words (2):", getTotalWordsFromString("    Leading and trailing spaces    ")); 
console.log("Total words (3):", getTotalWordsFromString("")); 
console.log("Total words (4):", getTotalWordsFromString("SingleWord")); 
console.log("Total words (5):", getTotalWordsFromString(12345));
