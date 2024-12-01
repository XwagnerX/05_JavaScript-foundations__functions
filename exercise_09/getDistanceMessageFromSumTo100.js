/** 
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number.
 *    - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
 *    - otherwise, return message "Sum with value N is left in N from number 100"
 * @param {number} value - The input number to add to the random number.
 * @returns {string} - The message indicating the relationship between the sum and 100.
 */
const getDistanceMessageFromSumTo100 = function (value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error("Input must be a non-negative number.");
    }
  
    const random = Math.floor(Math.random() * 101);
    const sum = value + random;
  
    if (sum > 100) {
      return `Sum with value ${sum} exceeds in ${sum - 100} from number 100`;
    } else {
      return `Sum with value ${sum} is left in ${100 - sum} from number 100`;
    }
  };
  
  export default getDistanceMessageFromSumTo100;
  