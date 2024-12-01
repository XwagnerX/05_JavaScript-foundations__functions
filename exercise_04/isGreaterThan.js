/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */
/**
 * Checks whether a number is greater than a given threshold.
 * 
 * @param {number} value - The number to evaluate.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} - Returns true if the value is greater than the threshold, otherwise false.
 */
function isGreaterThan(value, threshold) {
    return value > threshold;
}

module.exports = isGreaterThan;

