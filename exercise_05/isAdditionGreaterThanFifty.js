/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50.
 * @param {number} summand1 - The first number.
 * @param {number} summand2 - The second number.
 * @returns {boolean} - True if the sum is 50 or greater, otherwise false.
 */
const isAdditionGreaterThanFifty = function (summand1, summand2) {
    if (typeof summand1 !== 'number' || typeof summand2 !== 'number') {
      throw new Error("Both inputs must be numbers.");
    }
  
    return summand1 + summand2 >= 50;
  };
  
  export default isAdditionGreaterThanFifty;
  