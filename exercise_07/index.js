// Import and execute
import isTypeOf from "./isTypeOf.js";

try {
  console.log("Is type of (123, 'number'):", isTypeOf(123, 'number'));        
  console.log("Is type of ('hello', 'string'):", isTypeOf('hello', 'string')); 
  console.log("Is type of (true, 'boolean'):", isTypeOf(true, 'boolean'));    
  console.log("Is type of ([1, 2, 3], 'array'):", isTypeOf([1, 2, 3], 'array'));
  console.log("Is type of ({}, 'array'):", isTypeOf({}, 'array'));            
  console.log("Is type of (null, 'object'):", isTypeOf(null, 'object'));       
} catch (error) {
  console.error(error.message);
}
