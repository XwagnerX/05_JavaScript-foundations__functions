/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string.
 *    - if array has elements, then return array as string, joined by '|' (pipe character).
 *    - otherwise, return an empty string.
 * @param {Array} collection - The input array to transform.
 * @returns {string} - The transformed string or an empty string if the array is empty.
 */
const transformCollectionToString = function (collection) {
   if (!Array.isArray(collection)) {
     throw new Error("Input must be an array.");
   }
 
   return collection.length > 0 ? collection.join(' | ') : '';
 };
 
 export default transformCollectionToString;
 