/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string.
 *    - if total number of words is greater than 5, then return uppercase string
 *    - otherwise, return lowercase string
 * @param {string} sentence - The input sentence.
 * @returns {string} - The formatted string.
 */
const formatStringByWordsLength = function (sentence) {
   if (typeof sentence !== 'string' || sentence.trim() === '') {
     throw new Error("Input must be a non-empty string.");
   }
 
   const words = sentence.trim().split(/\s+/);
   const wordCount = words.length;
 
   return wordCount > 5 ? sentence.toUpperCase() : sentence.toLowerCase();
 };
 
 export default formatStringByWordsLength;
 