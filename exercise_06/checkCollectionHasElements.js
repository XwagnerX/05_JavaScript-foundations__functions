/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * #6 :: Export JS function "checkCollectionHasElements" to get the length of a collection and check whether it is empty or not.
 * @param {Array} collection - The input collection (array).
 * @returns {boolean} - True if the collection has elements, otherwise false.
 */
const checkCollectionHasElements = function (collection) {
    if (!Array.isArray(collection)) {
      throw new Error("Input must be an array.");
    }
  
    return collection.length > 0;
  };
  
  export default checkCollectionHasElements;
  