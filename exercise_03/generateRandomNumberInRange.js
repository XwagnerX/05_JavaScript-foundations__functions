/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit.
 * @param {number} limit - The upper limit for the random number.
 * @returns {number} - A random integer between 0 and the given limit.
 */
const generateRandomNumberInRange = function (limit) {
    if (typeof limit !== 'number' || limit <= 0) {
      throw new Error("Limit must be a positive number.");
    }
  
    // Genera un número aleatorio entre 0 y el límite (inclusive).
    return Math.floor(Math.random() * (limit + 1));
  };
  
  export default generateRandomNumberInRange;
  