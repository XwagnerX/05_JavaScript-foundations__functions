// Import and execute
import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";

try {
  console.log(getDistanceMessageFromSumTo100(70)); 

  console.log(getDistanceMessageFromSumTo100(30)); 
ç
  console.log(getDistanceMessageFromSumTo100(-10)); 
} catch (error) {
  console.error(error.message);
}

try {
  console.log(getDistanceMessageFromSumTo100("abc")); 
} catch (error) {
  console.error(error.message);
}
