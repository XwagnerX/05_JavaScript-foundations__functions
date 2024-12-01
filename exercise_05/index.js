//import and execute
import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty.js";

try {
  console.log("Is sum >= 50 (25 + 30):", isAdditionGreaterThanFifty(25, 30)); 
  console.log("Is sum >= 50 (20 + 20):", isAdditionGreaterThanFifty(20, 20)); 
  console.log("Is sum >= 50 (50 + 0):", isAdditionGreaterThanFifty(50, 0));  
  console.log("Is sum >= 50 (10 + 5):", isAdditionGreaterThanFifty(10, 5));  
} catch (error) {
  console.error(error.message);
}

try {
  console.log("Is sum >= 50 ('25' + 30):", isAdditionGreaterThanFifty("25", 30)); 
} catch (error) {
  console.error(error.message);
}
