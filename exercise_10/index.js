// Import and execute
import transformCollectionToString from "./transformCollectionToString.js";

try {
  console.log("Transformed collection (CASE #1):", transformCollectionToString(['apple', 'grapes', 'strawberries'])); 

  console.log("Transformed collection (CASE #2):", transformCollectionToString([])); 

  console.log("Transformed collection (Invalid input):", transformCollectionToString("not an array")); 
} catch (error) {
  console.error(error.message);
}

try {
  console.log("Transformed collection (Single element):", transformCollectionToString(['banana'])); 
} catch (error) {
  console.error(error.message);
}
