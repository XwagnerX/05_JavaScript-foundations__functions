/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * @param {string} sentence - The input string to analyze.
 * @returns {number} - The total number of words in the string.
 */
const getTotalWordsFromString = function (sentence) {
    if (typeof sentence !== 'string' || sentence.trim() === '') {
      return 0; 
    }
  
    const words = sentence.trim().split(/\s+/);
  
    return words.length;
  };
  
  export default getTotalWordsFromString;
  