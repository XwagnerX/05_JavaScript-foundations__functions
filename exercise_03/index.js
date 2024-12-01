// Import and execute
import generateRandomNumberInRange from "./generateRandomNumberInRange.js";

try {
  // Pruebas con diferentes límites.
  console.log("Random number (limit 10):", generateRandomNumberInRange(10)); // Ejemplo: 7
  console.log("Random number (limit 50):", generateRandomNumberInRange(50)); // Ejemplo: 32
  console.log("Random number (limit 0):", generateRandomNumberInRange(0));  // Error
} catch (error) {
  console.error(error.message);
}

try {
  console.log("Random number (limit -5):", generateRandomNumberInRange(-5)); // Error
} catch (error) {
  console.error(error.message);
}
