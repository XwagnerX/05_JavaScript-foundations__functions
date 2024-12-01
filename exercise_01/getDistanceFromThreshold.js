/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */
/**
 * Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value.
 * 
 * @param {number} value - The actual value to compare.
 * @param {number} threshold - The threshold value to compare against.
 * @returns {number} - The difference between the value and the threshold.
 */
const getDistanceFromThreshold = function (value, threshold) {
    return value - threshold;
  };
  
  export default getDistanceFromThreshold;
  