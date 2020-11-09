/** @module modules/exporting-a-function */

// Function assigned to 'module.exports'
// ==================================================

/* NOTE: Notation for CommonJS modules works for Node.js modules too. */

/**
 * @summary `module.exports` is a `function`.
 * @description Example of `module.exports` being a `function`.
 * @param {string} str - Any `string`.
 * @returns {string} It returns the same `str` surrounded by two nice `-`.
 */
module.exports = function publicMethodString (str) {
  return `-${str}-`
}