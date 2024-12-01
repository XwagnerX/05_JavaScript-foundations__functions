/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */

/**
 * hint 👉 array should be treated in a different way. Use Array.isArray() to check it
 * docu 👉 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument.
 * @param {any} value - The value to check.
 * @param {'string' | 'number' | 'boolean' | 'array'} type - The expected type.
 * @returns {boolean} - True if the value matches the type, otherwise false.
 */
const isTypeOf = function (value, type) {
    if (type === 'array') {
      return Array.isArray(value);
    }
  
    return typeof value === type;
  };
  
  export default isTypeOf;
  