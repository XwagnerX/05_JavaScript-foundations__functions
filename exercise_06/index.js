// Import and execute
import checkCollectionHasElements from "./checkCollectionHasElements.js";

try {
  console.log("Has elements ([1, 2, 3]):", checkCollectionHasElements([1, 2, 3])); 
  console.log("Has elements ([]):", checkCollectionHasElements([]));             
  console.log("Has elements ([null, undefined]):", checkCollectionHasElements([null, undefined])); 
  console.log("Has elements ([0]):", checkCollectionHasElements([0]));         
} catch (error) {
  console.error(error.message);
}

try {
  console.log("Has elements (123):", checkCollectionHasElements(123)); 
} catch (error) {
  console.error(error.message);
}
